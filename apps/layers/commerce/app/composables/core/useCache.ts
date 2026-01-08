export const useCache = () => {
  const cache = new Map<string, { data: any; expiry: number }>()

  const get = <T>(key: string): T | null => {
    const item = cache.get(key)
    if (!item) return null
    
    if (Date.now() > item.expiry) {
      cache.delete(key)
      return null
    }
    
    return item.data
  }

  const set = <T>(key: string, data: T, ttlMs: number = 300000): void => {
    cache.set(key, {
      data,
      expiry: Date.now() + ttlMs
    })
  }

  const del = (key: string): boolean => {
    return cache.delete(key)
  }

  const clear = (): void => {
    cache.clear()
  }

  const has = (key: string): boolean => {
    const item = cache.get(key)
    if (!item) return false
    
    if (Date.now() > item.expiry) {
      cache.delete(key)
      return false
    }
    
    return true
  }

  const memoize = <T extends (...args: any[]) => Promise<any>>(
    fn: T,
    keyFn: (...args: Parameters<T>) => string,
    ttlMs: number = 300000
  ) => {
    return async (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
      const key = keyFn(...args)
      const cached = get<Awaited<ReturnType<T>>>(key)
      
      if (cached !== null) {
        return cached
      }
      
      const result = await fn(...args)
      set(key, result, ttlMs)
      return result
    }
  }

  return {
    get,
    set,
    del,
    clear,
    has,
    memoize
  }
}
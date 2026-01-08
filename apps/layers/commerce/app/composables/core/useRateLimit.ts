export const useRateLimit = () => {
  const rateLimits = new Map<string, { count: number; resetTime: number }>()

  const checkRateLimit = (key: string, maxRequests: number = 100, windowMs: number = 60000): boolean => {
    const now = Date.now()
    const limit = rateLimits.get(key)

    if (!limit || now > limit.resetTime) {
      rateLimits.set(key, { count: 1, resetTime: now + windowMs })
      return true
    }

    if (limit.count >= maxRequests) {
      return false
    }

    limit.count++
    return true
  }

  const getRemainingRequests = (key: string, maxRequests: number = 100): number => {
    const limit = rateLimits.get(key)
    if (!limit) return maxRequests
    return Math.max(0, maxRequests - limit.count)
  }

  const resetRateLimit = (key: string): void => {
    rateLimits.delete(key)
  }

  return {
    checkRateLimit,
    getRemainingRequests,
    resetRateLimit
  }
}
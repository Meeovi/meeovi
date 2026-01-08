import { ref } from 'vue'

const KEY = 'meeovi_recently_viewed'

export function addViewed(id: string | number) {
  if (!process.client || !id) return
  try {
    const raw = localStorage.getItem(KEY) || '[]'
    let arr = JSON.parse(raw)
    if (!Array.isArray(arr)) arr = []
    arr = arr.filter((x: any) => x !== id)
    arr.unshift(id)
    arr = arr.slice(0, 10)
    localStorage.setItem(KEY, JSON.stringify(arr))
  } catch (e) {
    // ignore storage errors
    // eslint-disable-next-line no-console
    console.warn('useRecentlyViewed.addViewed error', e)
  }
}

export async function fetchProductsByIds(ids: Array<string | number>) {
  if (!ids || ids.length === 0) return []
  try {
    const { $commerce } = useNuxtApp()
    const results = await Promise.all(ids.map(id => $commerce.getProduct(String(id))))
    return results.filter(Boolean)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('useRecentlyViewed.fetchProductsByIds error', e)
    return []
  }
}

export function useRecentlyViewed() {
  const products = ref<any[]>([])

  async function load() {
    if (!process.client) return
    try {
      const raw = localStorage.getItem(KEY) || '[]'
      const ids = JSON.parse(raw)
      if (!Array.isArray(ids) || ids.length === 0) {
        products.value = []
        return
      }
      const uniqueIds = [...new Set(ids)].slice(0, 10)
      products.value = await fetchProductsByIds(uniqueIds)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('useRecentlyViewed.load error', e)
    }
  }

  return {
    products,
    load,
    addViewed
  }
}

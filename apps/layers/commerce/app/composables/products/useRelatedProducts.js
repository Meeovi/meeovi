import { useNuxtApp } from '#imports'

export const useRelatedProducts = () => {
  const { $commerce } = useNuxtApp()

  const getRelatedProducts = async (productId) => {
    try {
      const items = await $commerce.getProducts({ pageSize: 6 })
      return items.filter(p => p?.id !== String(productId)).slice(0, 6)
    } catch (error) {
      console.error('Error fetching related products (magento):', error)
      return []
    }
  }

  const getProductsByCategory = async (categoryId, limit = 10) => {
    try {
      return await $commerce.getProducts({ pageSize: limit })
    } catch (error) {
      console.error('Error fetching products by category (magento):', error)
      return []
    }
  }

  const getSimilarProducts = async (productId, attributes) => {
    try {
      const items = await $commerce.getProducts({ pageSize: 8 })
      return items.filter(p => p?.id !== String(productId)).slice(0, 8)
    } catch (error) {
      console.error('Error fetching similar products (magento):', error)
      return []
    }
  }

  return { getRelatedProducts, getProductsByCategory, getSimilarProducts }
}
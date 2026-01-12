import { useNuxtApp } from '#imports'

export const useFeaturedProducts = () => {
  const { $commerce } = useNuxtApp()

  const getFeaturedProducts = async (options = {}) => {
    try {
      const { limit = 10 } = options
      return await $commerce.getProducts({ pageSize: limit })
    } catch (error) {
      console.error('Error fetching featured products (magento):', error)
      return []
    }
  }

  const getFeaturedProductsByCategory = async (categoryId, limit = 6) => {
    try {
      // Provider doesn't have category filtering; return a page of products
      return await $commerce.getProducts({ pageSize: limit })
    } catch (error) {
      console.error('Error fetching featured products by category (magento):', error)
      return []
    }
  }

  const getHomepageFeatured = async () => {
    try {
      return await $commerce.getProducts({ pageSize: 8 })
    } catch (error) {
      console.error('Error fetching homepage featured products (magento):', error)
      return []
    }
  }

  const getFeaturedDeals = async (limit = 6) => {
    try {
      return await $commerce.getProducts({ pageSize: limit })
    } catch (error) {
      console.error('Error fetching featured deals (magento):', error)
      return []
    }
  }

  return {
    getFeaturedProducts,
    getFeaturedProductsByCategory,
    getHomepageFeatured,
    getFeaturedDeals
  }
}

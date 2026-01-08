import { useNuxtApp } from '#app'

export const useProducts = () => {
  const { $commerce } = useNuxtApp()

  const getProducts = async (options = {}) => {
    try {
      const { limit = 20, page = 1, search = '' } = options
      const params = {
        search: search || undefined,
        page: page || 1,
        pageSize: limit || 20
      }
      return await $commerce.getProducts(params)
    } catch (error) {
      console.error('Error fetching products (magento):', error)
      return []
    }
  }

  const getProductById = async (id) => {
    try {
      return await $commerce.getProduct(String(id))
    } catch (error) {
      console.error('Error fetching product (magento):', error)
      return null
    }
  }

  const getProductBySku = async (sku) => {
    try {
      return await $commerce.getProduct(String(sku))
    } catch (error) {
      console.error('Error fetching product by SKU (magento):', error)
      return null
    }
  }

  const getProductsByCategory = async (categoryId, options = {}) => {
    try {
      const { limit = 20, page = 1 } = options
      // Magento provider doesn't currently support category filtering via the
      // generic `getProducts` params. Return a page and let callers filter client-side.
      return await $commerce.getProducts({ page: page, pageSize: limit })
    } catch (error) {
      console.error('Error fetching products by category (magento):', error)
      return []
    }
  }

  const getFeaturedProducts = async (limit = 10) => {
    try {
      return await $commerce.getProducts({ pageSize: limit })
    } catch (error) {
      console.error('Error fetching featured products (magento):', error)
      return []
    }
  }

  const getLatestProducts = async (limit = 10) => {
    try {
      return await $commerce.getProducts({ pageSize: limit })
    } catch (error) {
      console.error('Error fetching latest products (magento):', error)
      return []
    }
  }

  const getProductsOnSale = async (limit = 20) => {
    try {
      return await $commerce.getProducts({ pageSize: limit })
    } catch (error) {
      console.error('Error fetching products on sale (magento):', error)
      return []
    }
  }

  const getRelatedProducts = async (productId, limit = 6) => {
    try {
      const items = await $commerce.getProducts({ pageSize: limit })
      return items.filter(p => p?.id !== String(productId)).slice(0, limit)
    } catch (error) {
      console.error('Error fetching related products (magento):', error)
      return []
    }
  }

  const searchProducts = async (query, options = {}) => {
    try {
      const { limit = 20, page = 1 } = options
      return await $commerce.getProducts({ search: query, page, pageSize: limit })
    } catch (error) {
      console.error('Error searching products (magento):', error)
      return []
    }
  }

  const getProductCount = async () => {
    // Provider doesn't expose aggregate counts via the generic interface.
    return 0
  }

  return {
    getProducts,
    getProductById,
    getProductBySku,
    getProductsByCategory,
    getFeaturedProducts,
    getLatestProducts,
    getProductsOnSale,
    getRelatedProducts,
    searchProducts,
    getProductCount
  }
}

import { createDirectus, rest, readItems, readItem, createItem, updateItem } from '@directus/sdk'

export const useShops = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()

  const getShops = memoize(async (options = {}) => {
    try {
      const {
        limit = 20,
        page = 1,
        search = '',
        status = 'active',
        category = null,
        location = null,
        featured = null
      } = options

      const filter = { status: { _eq: status } }

      if (search) {
        filter._or = [
          { name: { _contains: search } },
          { description: { _contains: search } },
          { 'owner.first_name': { _contains: search } },
          { 'owner.last_name': { _contains: search } }
        ]
      }

      if (category) {
        filter.categories = { categories_id: { _eq: category } }
      }

      if (location) {
        filter._or = [
          { city: { _contains: location } },
          { state: { _contains: location } },
          { country: { _contains: location } }
        ]
      }

      if (featured !== null) {
        filter.is_featured = { _eq: featured }
      }

      return await client.request(
        readItems('shops', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'owner.*',
            'categories.categories_id.*',
            'products.*',
            'reviews.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching shops:', error)
      return []
    }
  }, (options) => `shops:${JSON.stringify(options)}`, 300000)

  const getShopById = memoize(async (id) => {
    try {
      return await client.request(
        readItem('shops', id, {
          fields: [
            '*',
            'owner.*',
            'categories.categories_id.*',
            'products.*',
            'products.images.*',
            'reviews.*',
            'reviews.customer.*',
            'social_links.*'
          ]
        })
      )
    } catch (error) {
      console.error(`Error fetching shop with ID ${id}:`, error)
      return null
    }
  }, (id) => `shop:${id}`, 300000)

  const getShopBySlug = memoize(async (slug) => {
    try {
      const shops = await client.request(
        readItems('shops', {
          filter: { slug: { _eq: slug } },
          fields: [
            '*',
            'owner.*',
            'categories.categories_id.*',
            'products.*',
            'reviews.*'
          ],
          limit: 1
        })
      )
      return shops[0] || null
    } catch (error) {
      console.error(`Error fetching shop with slug ${slug}:`, error)
      return null
    }
  }, (slug) => `shop:slug:${slug}`, 300000)

  const createShop = async (shopData) => {
    try {
      const shop = {
        ...shopData,
        slug: generateSlug(shopData.name),
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('shops', shop))
      await logAction('shop_created', 'shops', result.id, shopData)
      return result
    } catch (error) {
      console.error('Error creating shop:', error)
      throw error
    }
  }

  const updateShopStatus = async (shopId, status) => {
    try {
      const result = await client.request(
        updateItem('shops', shopId, {
          status,
          updated_at: new Date().toISOString()
        })
      )
      await logAction('shop_status_updated', 'shops', shopId, { status })
      return result
    } catch (error) {
      console.error('Error updating shop status:', error)
      throw error
    }
  }

  const getFeaturedShops = memoize(async (limit = 8) => {
    try {
      return await client.request(
        readItems('shops', {
          filter: {
            status: { _eq: 'active' },
            is_featured: { _eq: true }
          },
          limit,
          sort: ['-featured_order', '-created_at'],
          fields: [
            '*',
            'owner.*',
            'categories.categories_id.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching featured shops:', error)
      return []
    }
  }, (limit) => `featured_shops:${limit}`, 600000)

  const getShopsByLocation = async (location, radius = 50) => {
    try {
      return await client.request(
        readItems('shops', {
          filter: {
            status: { _eq: 'active' },
            _or: [
              { city: { _icontains: location } },
              { state: { _icontains: location } },
              { postal_code: { _starts_with: location } }
            ]
          },
          sort: ['name'],
          fields: [
            '*',
            'owner.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching shops by location:', error)
      return []
    }
  }

  const getShopProducts = async (shopId, options = {}) => {
    try {
      const { limit = 20, page = 1, category = null } = options
      
      const filter = {
        shop_id: { _eq: shopId },
        status: { _eq: 'published' }
      }

      if (category) {
        filter.categories = { categories_id: { _eq: category } }
      }

      return await client.request(
        readItems('products', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'images.*',
            'categories.categories_id.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching shop products:', error)
      return []
    }
  }

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  return {
    getShops,
    getShopById,
    getShopBySlug,
    createShop,
    updateShopStatus,
    getFeaturedShops,
    getShopsByLocation,
    getShopProducts
  }
}
import { createDirectus, rest, readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk'

export const useGiftRegistry = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { $auth } = useNuxtApp()

  const createGiftRegistry = async (registryData) => {
    try {
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      const registry = {
        ...registryData,
        customer_id: currentUser.id,
        status: 'active',
        privacy: registryData.privacy || 'private',
        created_at: new Date().toISOString()
      }

      return await client.request(createItem('gift_registries', registry))
    } catch (error) {
      console.error('Error creating gift registry:', error)
      throw error
    }
  }

  const getMyGiftRegistries = async () => {
    try {
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      return await client.request(
        readItems('gift_registries', {
          filter: {
            customer_id: { _eq: currentUser.id }
          },
          sort: ['-created_at'],
          fields: ['*', 'items.*', 'items.product.*']
        })
      )
    } catch (error) {
      console.error('Error fetching gift registries:', error)
      throw error
    }
  }

  const getGiftRegistryById = async (registryId) => {
    try {
      return await client.request(
        readItem('gift_registries', registryId, {
          fields: ['*', 'items.*', 'items.product.*', 'customer.*']
        })
      )
    } catch (error) {
      console.error('Error fetching gift registry:', error)
      throw error
    }
  }

  const getPublicGiftRegistry = async (registryCode) => {
    try {
      const registries = await client.request(
        readItems('gift_registries', {
          filter: {
            registry_code: { _eq: registryCode },
            privacy: { _eq: 'public' },
            status: { _eq: 'active' }
          },
          fields: ['*', 'items.*', 'items.product.*', 'customer.first_name', 'customer.last_name'],
          limit: 1
        })
      )
      return registries[0] || null
    } catch (error) {
      console.error('Error fetching public gift registry:', error)
      throw error
    }
  }

  const updateGiftRegistry = async (registryId, registryData) => {
    try {
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      // Verify ownership
      const registry = await getGiftRegistryById(registryId)
      if (registry.customer_id !== currentUser.id) {
        throw new Error('Unauthorized to update this registry')
      }

      return await client.request(
        updateItem('gift_registries', registryId, {
          ...registryData,
          updated_at: new Date().toISOString()
        })
      )
    } catch (error) {
      console.error('Error updating gift registry:', error)
      throw error
    }
  }

  const deleteGiftRegistry = async (registryId) => {
    try {
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      // Verify ownership
      const registry = await getGiftRegistryById(registryId)
      if (registry.customer_id !== currentUser.id) {
        throw new Error('Unauthorized to delete this registry')
      }

      return await client.request(deleteItem('gift_registries', registryId))
    } catch (error) {
      console.error('Error deleting gift registry:', error)
      throw error
    }
  }

  const addItemToGiftRegistry = async (registryId, itemData) => {
    try {
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      // Verify ownership
      const registry = await getGiftRegistryById(registryId)
      if (registry.customer_id !== currentUser.id) {
        throw new Error('Unauthorized to modify this registry')
      }

      const item = {
        ...itemData,
        gift_registry_id: registryId,
        status: 'wanted',
        quantity_wanted: itemData.quantity || 1,
        quantity_received: 0,
        created_at: new Date().toISOString()
      }

      return await client.request(createItem('gift_registry_items', item))
    } catch (error) {
      console.error('Error adding item to gift registry:', error)
      throw error
    }
  }

  const updateRegistryItem = async (itemId, itemData) => {
    try {
      return await client.request(
        updateItem('gift_registry_items', itemId, {
          ...itemData,
          updated_at: new Date().toISOString()
        })
      )
    } catch (error) {
      console.error('Error updating registry item:', error)
      throw error
    }
  }

  const removeItemFromGiftRegistry = async (registryId, itemId) => {
    try {
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      // Verify ownership
      const registry = await getGiftRegistryById(registryId)
      if (registry.customer_id !== currentUser.id) {
        throw new Error('Unauthorized to modify this registry')
      }

      return await client.request(deleteItem('gift_registry_items', itemId))
    } catch (error) {
      console.error('Error removing item from gift registry:', error)
      throw error
    }
  }

  const markItemAsPurchased = async (itemId, quantity = 1, purchaserInfo = {}) => {
    try {
      const item = await client.request(readItem('gift_registry_items', itemId))
      const newQuantityReceived = (item.quantity_received || 0) + quantity

      await client.request(
        updateItem('gift_registry_items', itemId, {
          quantity_received: newQuantityReceived,
          status: newQuantityReceived >= item.quantity_wanted ? 'fulfilled' : 'partially_fulfilled',
          updated_at: new Date().toISOString()
        })
      )

      // Log the purchase
      if (purchaserInfo.name || purchaserInfo.email) {
        await client.request(
          createItem('gift_registry_purchases', {
            gift_registry_item_id: itemId,
            purchaser_name: purchaserInfo.name,
            purchaser_email: purchaserInfo.email,
            quantity: quantity,
            created_at: new Date().toISOString()
          })
        )
      }

      return true
    } catch (error) {
      console.error('Error marking item as purchased:', error)
      throw error
    }
  }

  const searchPublicRegistries = async (searchTerm) => {
    try {
      return await client.request(
        readItems('gift_registries', {
          filter: {
            privacy: { _eq: 'public' },
            status: { _eq: 'active' },
            _or: [
              { title: { _contains: searchTerm } },
              { description: { _contains: searchTerm } },
              { 'customer.first_name': { _contains: searchTerm } },
              { 'customer.last_name': { _contains: searchTerm } }
            ]
          },
          fields: ['*', 'customer.first_name', 'customer.last_name'],
          sort: ['-created_at']
        })
      )
    } catch (error) {
      console.error('Error searching public registries:', error)
      throw error
    }
  }

  return {
    createGiftRegistry,
    getMyGiftRegistries,
    getGiftRegistryById,
    getPublicGiftRegistry,
    updateGiftRegistry,
    deleteGiftRegistry,
    addItemToGiftRegistry,
    updateRegistryItem,
    removeItemFromGiftRegistry,
    markItemAsPurchased,
    searchPublicRegistries
  }
}
  
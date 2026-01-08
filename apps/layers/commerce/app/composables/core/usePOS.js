import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'

export const usePOS = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const createPOSTransaction = async (transactionData) => {
    return await client.request(
      createItem('pos_transactions', transactionData)
    )
  }

  const getPOSProducts = async (storeId) => {
    return await client.request(
      readItems('products', {
        filter: { 
          _and: [
            { pos_enabled: { _eq: true } },
            { store_id: { _eq: storeId } }
          ]
        },
        fields: ['*', 'inventory.*']
      })
    )
  }

  const updateInventory = async (productId, quantity) => {
    return await client.request(
      updateItem('products', productId, {
        inventory_quantity: quantity
      })
    )
  }

  const processPayment = async (paymentData) => {
    return await client.request(
      createItem('pos_payments', paymentData)
    )
  }

  return { createPOSTransaction, getPOSProducts, updateInventory, processPayment }
}
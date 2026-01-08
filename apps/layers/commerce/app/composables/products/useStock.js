import { createDirectus, rest, readItems, readItem, updateItem } from '@directus/sdk'

export const useStock = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getProductStock = async (productId) => {
    return await client.request(
      readItem('products', productId, {
        fields: ['inventory_quantity', 'manage_stock', 'stock_status']
      })
    )
  }

  const updateStock = async (productId, quantity) => {
    return await client.request(
      updateItem('products', productId, {
        inventory_quantity: quantity,
        stock_status: quantity > 0 ? 'in_stock' : 'out_of_stock'
      })
    )
  }

  const reserveStock = async (productId, quantity) => {
    const stock = await getProductStock(productId)
    if (stock.inventory_quantity >= quantity) {
      return await updateStock(productId, stock.inventory_quantity - quantity)
    }
    throw new Error('Insufficient stock')
  }

  const getStockAlerts = async () => {
    return await client.request(
      readItems('products', {
        filter: {
          _and: [
            { manage_stock: { _eq: true } },
            { inventory_quantity: { _lte: 5 } }
          ]
        },
        fields: ['id', 'name', 'inventory_quantity']
      })
    )
  }

  return { getProductStock, updateStock, reserveStock, getStockAlerts }
}
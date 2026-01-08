import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'
import type { StockItem, StockMovement, StockReservation } from '../types'

export const useInventory = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getStock = async (productId: string, warehouseId?: string) => {
    const filter: any = { product_id: { _eq: productId } }
    if (warehouseId) filter.warehouse_id = { _eq: warehouseId }

    return await client.request(readItems('stock_items', { filter }))
  }

  const updateStock = async (productId: string, warehouseId: string, quantity: number, reason: string) => {
    const movement: StockMovement = {
      id: '',
      productId,
      warehouseId,
      type: quantity > 0 ? 'in' : 'out',
      quantity: Math.abs(quantity),
      reason
    }

    await client.request(createItem('stock_movements', movement))

    const stock = await getStock(productId, warehouseId)
    if (stock.length > 0) {
      await client.request(updateItem('stock_items', stock[0].id, {
        quantity: stock[0].quantity + quantity,
        available_quantity: stock[0].available_quantity + quantity
      }))
    }
  }

  const reserveStock = async (productId: string, quantity: number, orderId: string): Promise<boolean> => {
    const stock = await getStock(productId)
    const totalAvailable = stock.reduce((sum, item) => sum + item.available_quantity, 0)
    
    if (totalAvailable < quantity) return false

    await client.request(createItem('stock_reservations', {
      product_id: productId,
      quantity,
      order_id: orderId,
      expires_at: new Date(Date.now() + 30 * 60 * 1000), // 30 min
      status: 'active'
    }))

    // Update reserved quantities
    for (const item of stock) {
      if (quantity <= 0) break
      const reserveQty = Math.min(quantity, item.available_quantity)
      
      await client.request(updateItem('stock_items', item.id, {
        reserved_quantity: item.reserved_quantity + reserveQty,
        available_quantity: item.available_quantity - reserveQty
      }))
      
      quantity -= reserveQty
    }

    return true
  }

  const releaseReservation = async (orderId: string) => {
    const reservations = await client.request(
      readItems('stock_reservations', {
        filter: { order_id: { _eq: orderId }, status: { _eq: 'active' } }
      })
    )

    for (const reservation of reservations) {
      const stock = await getStock(reservation.product_id)
      
      for (const item of stock) {
        const releaseQty = Math.min(reservation.quantity, item.reserved_quantity)
        
        await client.request(updateItem('stock_items', item.id, {
          reserved_quantity: item.reserved_quantity - releaseQty,
          available_quantity: item.available_quantity + releaseQty
        }))
      }

      await client.request(updateItem('stock_reservations', reservation.id, {
        status: 'expired'
      }))
    }
  }

  const getLowStockItems = async (warehouseId?: string) => {
    const filter: any = {
      _and: [
        { quantity: { _lte: { _field: 'reorder_level' } } },
        { reorder_level: { _gt: 0 } }
      ]
    }
    if (warehouseId) filter._and.push({ warehouse_id: { _eq: warehouseId } })

    return await client.request(
      readItems('stock_items', {
        filter,
        fields: ['*', 'product.*', 'warehouse.*']
      })
    )
  }

  const transferStock = async (productId: string, fromWarehouse: string, toWarehouse: string, quantity: number) => {
    await updateStock(productId, fromWarehouse, -quantity, 'Transfer out')
    await updateStock(productId, toWarehouse, quantity, 'Transfer in')
  }

  return {
    getStock,
    updateStock,
    reserveStock,
    releaseReservation,
    getLowStockItems,
    transferStock
  }
}
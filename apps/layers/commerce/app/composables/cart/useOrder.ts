import { createDirectus, rest, readItem, updateItem, createItem, readItems } from '@directus/sdk'
import type { Order, OrderStatus, OrderMutationResult } from '~/app/types/Order.type'
import { useAudit } from '../core/useAudit'
import { useCoupons } from '../marketing/getCoupons'

export const useOrder = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { $auth } = useNuxtApp() as any

  const order = ref<Order | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getActiveOrder = async (): Promise<Order | null> => {
    try {
      loading.value = true
      error.value = null
      
      const currentUser = $auth.user
      if (!currentUser) return null

      const orders = await client.request(
        readItems('orders', {
          filter: {
            customer_id: { _eq: currentUser.id },
            status: { _in: ['draft', 'pending'] }
          },
          fields: [
            '*',
            'order_items.*',
            'order_items.product.*',
            'shipping_address.*',
            'billing_address.*'
          ],
          limit: 1,
          sort: ['-updated_at']
        })
      )

      order.value = orders[0] as Order || null
      return order.value
    } catch (err: any) {
      error.value = err?.message || 'Unknown error'
      console.error('Error fetching active order:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  const createOrder = async (orderData: Partial<Order>): Promise<OrderMutationResult> => {
    try {
      loading.value = true
      error.value = null
      
      const currentUser = $auth.user
      if (!currentUser) {
        return {
          status: 'error',
          message: 'User not authenticated'
        }
      }

      const newOrder = {
        ...orderData,
        customer_id: currentUser.id,
        order_number: await generateOrderNumber(),
        status: 'draft',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('orders', newOrder)) as Order
      order.value = result
      
      await logAction('order_created', 'orders', result.id, orderData)
      
      return {
        status: 'success',
        order: result
      }
    } catch (err: any) {
      error.value = err?.message || 'Unknown error'
      console.error('Error creating order:', err)
      return {
        status: 'error',
        message: err?.message || 'Unknown error'
      }
    } finally {
      loading.value = false
    }
  }

  const updateOrder = async (orderId: string, updates: Partial<Order>): Promise<OrderMutationResult> => {
    try {
      loading.value = true
      error.value = null

      const result = await client.request(
        updateItem('orders', orderId, {
          ...updates,
          updated_at: new Date().toISOString()
        })
      ) as Order

      order.value = result
      await logAction('order_updated', 'orders', orderId, updates)
      
      return {
        status: 'success',
        order: result
      }
    } catch (err: any) {
      error.value = err?.message || 'Unknown error'
      console.error('Error updating order:', err)
      return {
        status: 'error',
        message: err?.message || 'Unknown error'
      }
    } finally {
      loading.value = false
    }
  }

  const addItemToOrder = async (orderId: string, productId: string, quantity: number): Promise<OrderMutationResult> => {
    try {
      loading.value = true
      error.value = null

      // Check stock availability
      const product = await client.request(readItem('products', productId, { fields: ['*', 'inventory.*'] }))
      if (!product) {
        return {
          status: 'error',
          message: 'Product not found'
        }
      }

      const availableStock = product.inventory?.quantity || 0
      if (availableStock < quantity) {
        return {
          status: 'partial',
          message: 'Insufficient stock available',
          quantityAvailable: availableStock
        }
      }

      // Add item to order
      const orderItem = {
        order_id: orderId,
        product_id: productId,
        quantity,
        price: product.sale_price || product.price,
        total: (product.sale_price || product.price) * quantity
      }

      await client.request(createItem('order_items', orderItem))
      
      // Update order totals
      await updateOrderTotals(orderId)
      
      // Refresh order data
      const updatedOrder = await client.request(
        readItem('orders', orderId, {
          fields: [
            '*',
            'order_items.*',
            'order_items.product.*'
          ]
        })
      ) as Order

      order.value = updatedOrder
      await logAction('item_added_to_order', 'orders', orderId, { product_id: productId, quantity })
      
      return {
        status: 'success',
        order: updatedOrder
      }
    } catch (err: any) {
      error.value = err?.message || 'Unknown error'
      console.error('Error adding item to order:', err)
      return {
        status: 'error',
        message: err?.message || 'Unknown error'
      }
    } finally {
      loading.value = false
    }
  }

  const applyCouponToOrder = async (orderId: string, couponCode: string): Promise<OrderMutationResult> => {
    try {
      loading.value = true
      error.value = null

      const { validateCoupon } = useCoupons()
      const currentOrder = await client.request(readItem('orders', orderId))
      
      const validation = await validateCoupon(couponCode, currentOrder.subtotal, currentOrder.customer_id)
      
      if (!validation.valid) {
        return {
          status: 'error',
          message: validation.message
        }
      }

      const coupon = validation.coupon
      if (!coupon) {
        return {
          status: 'error',
          message: 'Coupon validation failed'
        }
      }
      
      let discountAmount = 0
      
      if (coupon.discount_type === 'percentage') {
        discountAmount = (currentOrder.subtotal * coupon.discount_value) / 100
      } else {
        discountAmount = coupon.discount_value
      }

      if (coupon.max_discount_amount && discountAmount > coupon.max_discount_amount) {
        discountAmount = coupon.max_discount_amount
      }

      const result = await client.request(
        updateItem('orders', orderId, {
          coupon_code: couponCode,
          coupon_id: coupon.id,
          discount_amount: discountAmount,
          updated_at: new Date().toISOString()
        })
      ) as Order

      await updateOrderTotals(orderId)
      order.value = result
      
      await logAction('coupon_applied_to_order', 'orders', orderId, { coupon_code: couponCode, discount_amount: discountAmount })
      
      return {
        status: 'success',
        order: result
      }
    } catch (err: any) {
      error.value = err?.message || 'Unknown error'
      console.error('Error applying coupon to order:', err)
      return {
        status: 'error',
        message: err?.message || 'Unknown error'
      }
    } finally {
      loading.value = false
    }
  }

  const updateOrderTotals = async (orderId: string) => {
    try {
      const orderItems = await client.request(
        readItems('order_items', {
          filter: { order_id: { _eq: orderId } }
        })
      )

      const subtotal = orderItems.reduce((sum, item) => sum + item.total, 0)
      const currentOrder = await client.request(readItem('orders', orderId))
      const discountAmount = currentOrder.discount_amount || 0
      const shippingAmount = currentOrder.shipping_amount || 0
      const taxAmount = (subtotal - discountAmount + shippingAmount) * 0.08 // 8% tax
      const total = subtotal - discountAmount + shippingAmount + taxAmount

      await client.request(
        updateItem('orders', orderId, {
          subtotal,
          tax_amount: taxAmount,
          total,
          updated_at: new Date().toISOString()
        })
      )
    } catch (error: any) {
      console.error('Error updating order totals:', error)
    }
  }

  const generateOrderNumber = async (): Promise<string> => {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `ORD-${timestamp}-${random}`
  }

  return {
    order: readonly(order),
    loading: readonly(loading),
    error: readonly(error),
    getActiveOrder,
    createOrder,
    updateOrder,
    addItemToOrder,
    applyCouponToOrder
  }
}

// Legacy function for backward compatibility
export function useOrderMutation(
  order: Ref<Order>,
  result: OrderMutationResult,
): OrderStatus {
  if (result.status === 'success' && result.order) {
    order.value = result.order
    return { status: 'success' }
  }
  
  if (result.status === 'partial') {
    return {
      status: 'partial',
      quantityAvailable: result.quantityAvailable,
      message: result.message
    }
  }
  
  return {
    status: 'error',
    message: result.message || 'Unknown error occurred'
  }
}
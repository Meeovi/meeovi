import { createDirectus, rest, readItems, readItem, aggregate } from '@directus/sdk'

export const useSalesOrders = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getOrders = async (options = {}) => {
    try {
      const {
        limit = 50,
        page = 1,
        search = '',
        status = null,
        dateFrom = null,
        dateTo = null,
        sort = ['-created_at']
      } = options

      const filter = {}

      if (search) {
        filter._or = [
          { order_number: { _contains: search } },
          { customer_email: { _contains: search } },
          { customer_name: { _contains: search } }
        ]
      }

      if (status) {
        filter.status = { _eq: status }
      }

      if (dateFrom && dateTo) {
        filter.created_at = {
          _between: [dateFrom, dateTo]
        }
      } else if (dateFrom) {
        filter.created_at = { _gte: dateFrom }
      } else if (dateTo) {
        filter.created_at = { _lte: dateTo }
      }

      return await client.request(
        readItems('orders', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort,
          fields: [
            '*',
            'order_items.*',
            'order_items.product.*',
            'customer.*',
            'payments.*',
            'shipments.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching sales orders:', error)
      return []
    }
  }

  const getOrderById = async (id) => {
    try {
      return await client.request(
        readItem('orders', id, {
          fields: [
            '*',
            'order_items.*',
            'order_items.product.*',
            'customer.*',
            'shipping_address.*',
            'billing_address.*',
            'payments.*',
            'shipments.*',
            'order_notes.*',
            'returns.*'
          ]
        })
      )
    } catch (error) {
      console.error(`Error fetching order with ID ${id}:`, error)
      return null
    }
  }

  const getOrdersStatuses = () => {
    return [
      { value: 'pending', label: 'Pending', color: 'orange' },
      { value: 'processing', label: 'Processing', color: 'blue' },
      { value: 'shipped', label: 'Shipped', color: 'purple' },
      { value: 'delivered', label: 'Delivered', color: 'green' },
      { value: 'cancelled', label: 'Cancelled', color: 'red' },
      { value: 'refunded', label: 'Refunded', color: 'grey' }
    ]
  }

  const getOrdersComments = async (orderId) => {
    try {
      return await client.request(
        readItems('order_notes', {
          filter: {
            order_id: { _eq: orderId }
          },
          sort: ['-created_at'],
          fields: ['*']
        })
      )
    } catch (error) {
      console.error(`Error fetching comments for order with ID ${orderId}:`, error)
      return []
    }
  }

  const getSalesMetrics = async (dateFrom, dateTo) => {
    try {
      const filter = {
        status: { _neq: 'cancelled' }
      }

      if (dateFrom && dateTo) {
        filter.created_at = {
          _between: [dateFrom, dateTo]
        }
      }

      // Get total sales
      const salesData = await client.request(
        aggregate('orders', {
          query: {
            filter,
            aggregate: {
              sum: ['total_amount'],
              count: '*',
              avg: ['total_amount']
            }
          }
        })
      )

      // Get orders by status
      const statusBreakdown = await client.request(
        aggregate('orders', {
          query: {
            filter,
            groupBy: ['status'],
            aggregate: {
              count: '*',
              sum: ['total_amount']
            }
          }
        })
      )

      return {
        totalSales: salesData[0]?.sum?.total_amount || 0,
        totalOrders: salesData[0]?.count || 0,
        averageOrderValue: salesData[0]?.avg?.total_amount || 0,
        statusBreakdown
      }
    } catch (error) {
      console.error('Error fetching sales metrics:', error)
      return {
        totalSales: 0,
        totalOrders: 0,
        averageOrderValue: 0,
        statusBreakdown: []
      }
    }
  }

  const getTopSellingProducts = async (dateFrom, dateTo, limit = 10) => {
    try {
      const filter = {
        'order.status': { _neq: 'cancelled' }
      }

      if (dateFrom && dateTo) {
        filter['order.created_at'] = {
          _between: [dateFrom, dateTo]
        }
      }

      return await client.request(
        aggregate('order_items', {
          query: {
            filter,
            groupBy: ['product_id'],
            aggregate: {
              sum: ['quantity'],
              sum: ['total']
            },
            sort: ['-sum.quantity'],
            limit
          }
        })
      )
    } catch (error) {
      console.error('Error fetching top selling products:', error)
      return []
    }
  }

  const getRecentOrders = async (limit = 10) => {
    try {
      return await client.request(
        readItems('orders', {
          limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'customer.first_name',
            'customer.last_name',
            'customer.email'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching recent orders:', error)
      return []
    }
  }

  const getOrdersByCustomer = async (customerId, options = {}) => {
    try {
      const { limit = 20, status = null } = options
      
      const filter = {
        customer_id: { _eq: customerId }
      }

      if (status) {
        filter.status = { _eq: status }
      }

      return await client.request(
        readItems('orders', {
          filter,
          limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'order_items.*',
            'order_items.product.*',
            'payments.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching orders by customer:', error)
      return []
    }
  }

  return {
    getOrders,
    getOrderById,
    getOrdersStatuses,
    getOrdersComments,
    getSalesMetrics,
    getTopSellingProducts,
    getRecentOrders,
    getOrdersByCustomer
  }
}
import { createDirectus, rest, readItems, readItem, createItem, updateItem, aggregate } from '@directus/sdk'

export const useTransactions = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()

  const getTransactions = memoize(async (options = {}) => {
    try {
      const {
        limit = 50,
        page = 1,
        search = '',
        status = null,
        type = null,
        paymentMethod = null,
        customerId = null,
        dateFrom = null,
        dateTo = null
      } = options

      const filter = {}

      if (search) {
        filter._or = [
          { transaction_id: { _contains: search } },
          { reference_id: { _contains: search } },
          { 'order.order_number': { _contains: search } },
          { 'customer.email': { _contains: search } }
        ]
      }

      if (status) filter.status = { _eq: status }
      if (type) filter.type = { _eq: type }
      if (paymentMethod) filter.payment_method = { _eq: paymentMethod }
      if (customerId) filter.customer_id = { _eq: customerId }
      
      if (dateFrom && dateTo) {
        filter.created_at = { _between: [dateFrom, dateTo] }
      }

      return await client.request(
        readItems('transactions', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'order.*',
            'customer.*',
            'payment_details.*',
            'refunds.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching transactions:', error)
      return []
    }
  }, (options) => `transactions:${JSON.stringify(options)}`, 300000)

  const getTransactionById = memoize(async (id) => {
    try {
      return await client.request(
        readItem('transactions', id, {
          fields: [
            '*',
            'order.*',
            'customer.*',
            'payment_details.*',
            'refunds.*',
            'gateway_response.*'
          ]
        })
      )
    } catch (error) {
      console.error(`Error fetching transaction with ID ${id}:`, error)
      return null
    }
  }, (id) => `transaction:${id}`, 300000)

  const createTransaction = async (transactionData) => {
    try {
      const transaction = {
        ...transactionData,
        transaction_id: await generateTransactionId(),
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('transactions', transaction))
      await logAction('transaction_created', 'transactions', result.id, transactionData)
      return result
    } catch (error) {
      console.error('Error creating transaction:', error)
      throw error
    }
  }

  const updateTransactionStatus = async (transactionId, status, gatewayResponse = null) => {
    try {
      const updateData = {
        status,
        updated_at: new Date().toISOString()
      }

      if (status === 'completed') {
        updateData.completed_at = new Date().toISOString()
      } else if (status === 'failed') {
        updateData.failed_at = new Date().toISOString()
      }

      if (gatewayResponse) {
        updateData.gateway_response = gatewayResponse
      }

      const result = await client.request(updateItem('transactions', transactionId, updateData))
      await logAction('transaction_status_updated', 'transactions', transactionId, { status, gateway_response: gatewayResponse })
      return result
    } catch (error) {
      console.error('Error updating transaction status:', error)
      throw error
    }
  }

  const processRefund = async (transactionId, refundAmount, reason = '') => {
    try {
      const refund = {
        transaction_id: transactionId,
        amount: refundAmount,
        reason,
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('transaction_refunds', refund))
      await logAction('refund_initiated', 'transactions', transactionId, { amount: refundAmount, reason })
      return result
    } catch (error) {
      console.error('Error processing refund:', error)
      throw error
    }
  }

  const getTransactionsByOrder = async (orderId) => {
    try {
      return await client.request(
        readItems('transactions', {
          filter: { order_id: { _eq: orderId } },
          sort: ['-created_at'],
          fields: [
            '*',
            'payment_details.*',
            'refunds.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching transactions by order:', error)
      return []
    }
  }

  const getTransactionMetrics = async (dateFrom, dateTo) => {
    try {
      const filter = {
        status: { _eq: 'completed' }
      }

      if (dateFrom && dateTo) {
        filter.created_at = { _between: [dateFrom, dateTo] }
      }

      const metrics = await client.request(
        aggregate('transactions', {
          query: {
            filter,
            aggregate: {
              sum: ['amount'],
              count: '*',
              avg: ['amount']
            }
          }
        })
      )

      const typeBreakdown = await client.request(
        aggregate('transactions', {
          query: {
            filter,
            groupBy: ['type'],
            aggregate: {
              count: '*',
              sum: ['amount']
            }
          }
        })
      )

      return {
        totalAmount: metrics[0]?.sum?.amount || 0,
        totalCount: metrics[0]?.count || 0,
        averageAmount: metrics[0]?.avg?.amount || 0,
        typeBreakdown
      }
    } catch (error) {
      console.error('Error fetching transaction metrics:', error)
      return {
        totalAmount: 0,
        totalCount: 0,
        averageAmount: 0,
        typeBreakdown: []
      }
    }
  }

  const generateTransactionId = async () => {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    return `TXN-${timestamp}-${random}`
  }

  const getTransactionStatuses = () => {
    return [
      { value: 'pending', label: 'Pending', color: 'orange' },
      { value: 'processing', label: 'Processing', color: 'blue' },
      { value: 'completed', label: 'Completed', color: 'green' },
      { value: 'failed', label: 'Failed', color: 'red' },
      { value: 'cancelled', label: 'Cancelled', color: 'grey' },
      { value: 'refunded', label: 'Refunded', color: 'purple' }
    ]
  }

  return {
    getTransactions,
    getTransactionById,
    createTransaction,
    updateTransactionStatus,
    processRefund,
    getTransactionsByOrder,
    getTransactionMetrics,
    getTransactionStatuses
  }
}
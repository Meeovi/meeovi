import { createDirectus, rest, readItems, readItem, createItem, updateItem } from '@directus/sdk'

export const useCreditMemos = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()

  const getCreditMemos = memoize(async (options = {}) => {
    try {
      const {
        limit = 50,
        page = 1,
        search = '',
        status = null,
        customerId = null,
        orderId = null,
        dateFrom = null,
        dateTo = null
      } = options

      const filter = {}

      if (search) {
        filter._or = [
          { memo_number: { _contains: search } },
          { 'order.order_number': { _contains: search } },
          { 'customer.email': { _contains: search } }
        ]
      }

      if (status) filter.status = { _eq: status }
      if (customerId) filter.customer_id = { _eq: customerId }
      if (orderId) filter.order_id = { _eq: orderId }
      
      if (dateFrom && dateTo) {
        filter.created_at = { _between: [dateFrom, dateTo] }
      }

      return await client.request(
        readItems('credit_memos', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'order.*',
            'customer.*',
            'memo_items.*',
            'memo_items.product.*',
            'return.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching credit memos:', error)
      return []
    }
  }, (options) => `credit_memos:${JSON.stringify(options)}`, 300000)

  const getCreditMemoById = memoize(async (id) => {
    try {
      return await client.request(
        readItem('credit_memos', id, {
          fields: [
            '*',
            'order.*',
            'customer.*',
            'memo_items.*',
            'memo_items.product.*',
            'return.*',
            'refund_transactions.*'
          ]
        })
      )
    } catch (error) {
      console.error(`Error fetching credit memo with ID ${id}:`, error)
      return null
    }
  }, (id) => `credit_memo:${id}`, 300000)

  const createCreditMemo = async (memoData) => {
    try {
      const memo = {
        ...memoData,
        memo_number: await generateMemoNumber(),
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('credit_memos', memo))
      await logAction('credit_memo_created', 'credit_memos', result.id, memoData)
      return result
    } catch (error) {
      console.error('Error creating credit memo:', error)
      throw error
    }
  }

  const updateMemoStatus = async (memoId, status) => {
    try {
      const updateData = {
        status,
        updated_at: new Date().toISOString()
      }

      if (status === 'processed') {
        updateData.processed_at = new Date().toISOString()
      } else if (status === 'refunded') {
        updateData.refunded_at = new Date().toISOString()
      }

      const result = await client.request(updateItem('credit_memos', memoId, updateData))
      await logAction('credit_memo_status_updated', 'credit_memos', memoId, { status })
      return result
    } catch (error) {
      console.error('Error updating credit memo status:', error)
      throw error
    }
  }

  const processRefund = async (memoId, refundAmount, refundMethod = 'original') => {
    try {
      // Create refund transaction
      const refund = {
        credit_memo_id: memoId,
        amount: refundAmount,
        method: refundMethod,
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const refundResult = await client.request(createItem('refund_transactions', refund))
      
      // Update memo status
      await updateMemoStatus(memoId, 'refunded')
      
      await logAction('refund_processed', 'credit_memos', memoId, { amount: refundAmount, method: refundMethod })
      return refundResult
    } catch (error) {
      console.error('Error processing refund:', error)
      throw error
    }
  }

  const getMemosByOrder = async (orderId) => {
    try {
      return await client.request(
        readItems('credit_memos', {
          filter: { order_id: { _eq: orderId } },
          sort: ['-created_at'],
          fields: [
            '*',
            'memo_items.*',
            'memo_items.product.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching memos by order:', error)
      return []
    }
  }

  const generateMemoNumber = async () => {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `CM-${timestamp}-${random}`
  }

  const getMemoStatuses = () => {
    return [
      { value: 'pending', label: 'Pending', color: 'orange' },
      { value: 'approved', label: 'Approved', color: 'blue' },
      { value: 'processed', label: 'Processed', color: 'green' },
      { value: 'refunded', label: 'Refunded', color: 'purple' },
      { value: 'cancelled', label: 'Cancelled', color: 'red' }
    ]
  }

  return {
    getCreditMemos,
    getCreditMemoById,
    createCreditMemo,
    updateMemoStatus,
    processRefund,
    getMemosByOrder,
    getMemoStatuses
  }
}
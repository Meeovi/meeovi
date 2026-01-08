import { createDirectus, rest, readItems, readItem, createItem, updateItem } from '@directus/sdk'

export const useReturns = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()

  const getReturns = memoize(async (options = {}) => {
    try {
      const {
        limit = 50,
        page = 1,
        search = '',
        status = null,
        customerId = null,
        dateFrom = null,
        dateTo = null
      } = options

      const filter = {}

      if (search) {
        filter._or = [
          { return_number: { _contains: search } },
          { 'order.order_number': { _contains: search } },
          { reason: { _contains: search } }
        ]
      }

      if (status) filter.status = { _eq: status }
      if (customerId) filter.customer_id = { _eq: customerId }
      
      if (dateFrom && dateTo) {
        filter.created_at = { _between: [dateFrom, dateTo] }
      }

      return await client.request(
        readItems('returns', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'order.*',
            'customer.*',
            'return_items.*',
            'return_items.product.*',
            'refunds.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching returns:', error)
      return []
    }
  }, (options) => `returns:${JSON.stringify(options)}`, 300000)

  const getReturnById = memoize(async (id) => {
    try {
      return await client.request(
        readItem('returns', id, {
          fields: [
            '*',
            'order.*',
            'customer.*',
            'return_items.*',
            'return_items.product.*',
            'refunds.*',
            'return_notes.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching return:', error)
      return null
    }
  }, (id) => `return:${id}`, 300000)

  const createReturn = async (returnData) => {
    try {
      const returnRecord = {
        ...returnData,
        return_number: await generateReturnNumber(),
        status: 'requested',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('returns', returnRecord))
      await logAction('return_created', 'returns', result.id, returnData)
      return result
    } catch (error) {
      console.error('Error creating return:', error)
      throw error
    }
  }

  const updateReturnStatus = async (returnId, status, note = '') => {
    try {
      const updateData = {
        status,
        updated_at: new Date().toISOString()
      }

      if (status === 'approved') {
        updateData.approved_at = new Date().toISOString()
      } else if (status === 'processed') {
        updateData.processed_at = new Date().toISOString()
      }

      const result = await client.request(updateItem('returns', returnId, updateData))
      
      if (note) {
        await client.request(
          createItem('return_notes', {
            return_id: returnId,
            note: `Status changed to ${status}. ${note}`,
            created_at: new Date().toISOString()
          })
        )
      }

      await logAction('return_status_updated', 'returns', returnId, { status, note })
      return result
    } catch (error) {
      console.error('Error updating return status:', error)
      throw error
    }
  }

  const processRefund = async (returnId, refundAmount, refundMethod = 'original') => {
    try {
      const refund = {
        return_id: returnId,
        amount: refundAmount,
        method: refundMethod,
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('refunds', refund))
      await updateReturnStatus(returnId, 'refunded', `Refund of ${refundAmount} processed`)
      await logAction('refund_processed', 'refunds', result.id, { return_id: returnId, amount: refundAmount })
      return result
    } catch (error) {
      console.error('Error processing refund:', error)
      throw error
    }
  }

  const generateReturnNumber = async () => {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `RET-${timestamp}-${random}`
  }

  const getReturnStatuses = () => {
    return [
      { value: 'requested', label: 'Requested', color: 'orange' },
      { value: 'approved', label: 'Approved', color: 'green' },
      { value: 'rejected', label: 'Rejected', color: 'red' },
      { value: 'processed', label: 'Processed', color: 'blue' },
      { value: 'refunded', label: 'Refunded', color: 'purple' }
    ]
  }

  return {
    getReturns,
    getReturnById,
    createReturn,
    updateReturnStatus,
    processRefund,
    getReturnStatuses
  }
}
  
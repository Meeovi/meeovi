import { createDirectus, rest, readItems, readItem, createItem, updateItem } from '@directus/sdk'

export const useInvoices = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()

  const getInvoices = memoize(async (options = {}) => {
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
          { invoice_number: { _contains: search } },
          { 'order.order_number': { _contains: search } },
          { 'customer.email': { _contains: search } }
        ]
      }

      if (status) filter.status = { _eq: status }
      if (customerId) filter.customer_id = { _eq: customerId }
      
      if (dateFrom && dateTo) {
        filter.created_at = { _between: [dateFrom, dateTo] }
      }

      return await client.request(
        readItems('invoices', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'order.*',
            'customer.*',
            'invoice_items.*',
            'invoice_items.product.*',
            'payments.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching invoices:', error)
      return []
    }
  }, (options) => `invoices:${JSON.stringify(options)}`, 300000)

  const getInvoiceById = memoize(async (id) => {
    try {
      return await client.request(
        readItem('invoices', id, {
          fields: [
            '*',
            'order.*',
            'customer.*',
            'invoice_items.*',
            'invoice_items.product.*',
            'payments.*',
            'billing_address.*'
          ]
        })
      )
    } catch (error) {
      console.error(`Error fetching invoice with ID ${id}:`, error)
      return null
    }
  }, (id) => `invoice:${id}`, 300000)

  const createInvoice = async (orderId, invoiceData = {}) => {
    try {
      const invoice = {
        order_id: orderId,
        invoice_number: await generateInvoiceNumber(),
        status: 'draft',
        amount: invoiceData.amount || 0,
        tax_amount: invoiceData.tax_amount || 0,
        due_date: invoiceData.due_date || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        created_at: new Date().toISOString(),
        ...invoiceData
      }

      const result = await client.request(createItem('invoices', invoice))
      await logAction('invoice_created', 'invoices', result.id, { order_id: orderId })
      return result
    } catch (error) {
      console.error('Error creating invoice:', error)
      throw error
    }
  }

  const updateInvoiceStatus = async (invoiceId, status) => {
    try {
      const updateData = {
        status,
        updated_at: new Date().toISOString()
      }

      if (status === 'paid') {
        updateData.paid_at = new Date().toISOString()
      }

      const result = await client.request(updateItem('invoices', invoiceId, updateData))
      await logAction('invoice_status_updated', 'invoices', invoiceId, { status })
      return result
    } catch (error) {
      console.error('Error updating invoice status:', error)
      throw error
    }
  }

  const generateInvoiceNumber = async () => {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `INV-${timestamp}-${random}`
  }

  const getOverdueInvoices = async () => {
    try {
      return await client.request(
        readItems('invoices', {
          filter: {
            status: { _neq: 'paid' },
            due_date: { _lt: new Date().toISOString() }
          },
          sort: ['due_date'],
          fields: [
            '*',
            'order.*',
            'customer.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching overdue invoices:', error)
      return []
    }
  }

  return {
    getInvoices,
    getInvoiceById,
    createInvoice,
    updateInvoiceStatus,
    getOverdueInvoices
  }
}
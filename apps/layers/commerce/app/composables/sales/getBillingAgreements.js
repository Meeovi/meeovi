import { createDirectus, rest, readItems, readItem, createItem, updateItem } from '@directus/sdk'

export const useBillingAgreements = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()

  const getBillingAgreements = memoize(async (options = {}) => {
    try {
      const {
        limit = 50,
        page = 1,
        search = '',
        status = null,
        customerId = null,
        paymentMethod = null
      } = options

      const filter = {}

      if (search) {
        filter._or = [
          { agreement_id: { _contains: search } },
          { reference_id: { _contains: search } },
          { 'customer.email': { _contains: search } }
        ]
      }

      if (status) filter.status = { _eq: status }
      if (customerId) filter.customer_id = { _eq: customerId }
      if (paymentMethod) filter.payment_method = { _eq: paymentMethod }

      return await client.request(
        readItems('billing_agreements', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'customer.*',
            'payment_method_details.*',
            'transactions.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching billing agreements:', error)
      return []
    }
  }, (options) => `billing_agreements:${JSON.stringify(options)}`, 300000)

  const getBillingAgreementById = memoize(async (id) => {
    try {
      return await client.request(
        readItem('billing_agreements', id, {
          fields: [
            '*',
            'customer.*',
            'payment_method_details.*',
            'transactions.*',
            'orders.*'
          ]
        })
      )
    } catch (error) {
      console.error(`Error fetching billing agreement with ID ${id}:`, error)
      return null
    }
  }, (id) => `billing_agreement:${id}`, 300000)

  const createBillingAgreement = async (agreementData) => {
    try {
      const agreement = {
        ...agreementData,
        agreement_id: await generateAgreementId(),
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('billing_agreements', agreement))
      await logAction('billing_agreement_created', 'billing_agreements', result.id, agreementData)
      return result
    } catch (error) {
      console.error('Error creating billing agreement:', error)
      throw error
    }
  }

  const updateAgreementStatus = async (agreementId, status) => {
    try {
      const updateData = {
        status,
        updated_at: new Date().toISOString()
      }

      if (status === 'active') {
        updateData.activated_at = new Date().toISOString()
      } else if (status === 'cancelled') {
        updateData.cancelled_at = new Date().toISOString()
      }

      const result = await client.request(updateItem('billing_agreements', agreementId, updateData))
      await logAction('billing_agreement_status_updated', 'billing_agreements', agreementId, { status })
      return result
    } catch (error) {
      console.error('Error updating billing agreement status:', error)
      throw error
    }
  }

  const getCustomerAgreements = async (customerId, status = 'active') => {
    try {
      return await client.request(
        readItems('billing_agreements', {
          filter: {
            customer_id: { _eq: customerId },
            status: { _eq: status }
          },
          sort: ['-created_at'],
          fields: [
            '*',
            'payment_method_details.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching customer agreements:', error)
      return []
    }
  }

  const generateAgreementId = async () => {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `BA-${timestamp}-${random}`
  }

  return {
    getBillingAgreements,
    getBillingAgreementById,
    createBillingAgreement,
    updateAgreementStatus,
    getCustomerAgreements
  }
}
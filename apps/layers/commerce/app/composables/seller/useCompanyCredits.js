import { createDirectus, rest, readItems, readItem, createItem, updateItem, aggregate } from '@directus/sdk'

export const useCompanyCredits = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()

  const getCompanyCredit = memoize(async (companyId) => {
    try {
      const credits = await client.request(
        readItems('company_credits', {
          filter: {
            company_id: { _eq: companyId },
            status: { _eq: 'active' }
          },
          fields: [
            '*',
            'company.*',
            'approved_by.*',
            'credit_transactions.*'
          ],
          limit: 1,
          sort: ['-created_at']
        })
      )

      return credits[0] || null
    } catch (error) {
      console.error('Error fetching company credit:', error)
      return null
    }
  }, (companyId) => `company_credit:${companyId}`, 300000)

  const createCompanyCredit = async (companyId, creditData) => {
    try {
      const credit = {
        company_id: companyId,
        credit_limit: creditData.credit_limit,
        available_credit: creditData.credit_limit,
        used_credit: 0,
        currency: creditData.currency || 'USD',
        payment_terms: creditData.payment_terms || 'net_30',
        status: 'pending_approval',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('company_credits', credit))
      await logAction('company_credit_created', 'company_credits', result.id, creditData)
      return result
    } catch (error) {
      console.error('Error creating company credit:', error)
      throw error
    }
  }

  const updateCompanyCredit = async (creditId, creditData) => {
    try {
      const updateData = {
        ...creditData,
        updated_at: new Date().toISOString()
      }

      const result = await client.request(updateItem('company_credits', creditId, updateData))
      await logAction('company_credit_updated', 'company_credits', creditId, creditData)
      return result
    } catch (error) {
      console.error('Error updating company credit:', error)
      throw error
    }
  }

  const approveCreditLimit = async (creditId, approvedBy, approvedLimit = null) => {
    try {
      const credit = await client.request(readItem('company_credits', creditId))
      const finalLimit = approvedLimit || credit.credit_limit

      const result = await client.request(
        updateItem('company_credits', creditId, {
          credit_limit: finalLimit,
          available_credit: finalLimit - credit.used_credit,
          status: 'active',
          approved_by: approvedBy,
          approved_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
      )

      await logAction('company_credit_approved', 'company_credits', creditId, { approved_by: approvedBy, approved_limit: finalLimit })
      return result
    } catch (error) {
      console.error('Error approving credit limit:', error)
      throw error
    }
  }

  const rejectCreditLimit = async (creditId, rejectedBy, reason = '') => {
    try {
      const result = await client.request(
        updateItem('company_credits', creditId, {
          status: 'rejected',
          rejected_by: rejectedBy,
          rejection_reason: reason,
          rejected_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
      )

      await logAction('company_credit_rejected', 'company_credits', creditId, { rejected_by: rejectedBy, reason })
      return result
    } catch (error) {
      console.error('Error rejecting credit limit:', error)
      throw error
    }
  }

  const allocateCredit = async (companyId, amount, orderId, description = '') => {
    try {
      const credit = await getCompanyCredit(companyId)
      if (!credit) throw new Error('No active credit found for company')
      
      if (credit.available_credit < amount) {
        throw new Error('Insufficient credit available')
      }

      // Create credit transaction
      await client.request(
        createItem('company_credit_transactions', {
          company_credit_id: credit.id,
          type: 'allocation',
          amount: -amount,
          order_id: orderId,
          description: description || `Credit allocated for order ${orderId}`,
          created_at: new Date().toISOString()
        })
      )

      // Update credit balances
      const result = await client.request(
        updateItem('company_credits', credit.id, {
          used_credit: credit.used_credit + amount,
          available_credit: credit.available_credit - amount,
          updated_at: new Date().toISOString()
        })
      )

      await logAction('company_credit_allocated', 'company_credits', credit.id, { amount, order_id: orderId })
      return result
    } catch (error) {
      console.error('Error allocating credit:', error)
      throw error
    }
  }

  const releaseCredit = async (companyId, amount, orderId, description = '') => {
    try {
      const credit = await getCompanyCredit(companyId)
      if (!credit) throw new Error('No active credit found for company')

      // Create credit transaction
      await client.request(
        createItem('company_credit_transactions', {
          company_credit_id: credit.id,
          type: 'release',
          amount: amount,
          order_id: orderId,
          description: description || `Credit released from order ${orderId}`,
          created_at: new Date().toISOString()
        })
      )

      // Update credit balances
      const result = await client.request(
        updateItem('company_credits', credit.id, {
          used_credit: Math.max(0, credit.used_credit - amount),
          available_credit: Math.min(credit.credit_limit, credit.available_credit + amount),
          updated_at: new Date().toISOString()
        })
      )

      await logAction('company_credit_released', 'company_credits', credit.id, { amount, order_id: orderId })
      return result
    } catch (error) {
      console.error('Error releasing credit:', error)
      throw error
    }
  }

  const processPayment = async (companyId, amount, paymentReference, description = '') => {
    try {
      const credit = await getCompanyCredit(companyId)
      if (!credit) throw new Error('No active credit found for company')

      // Create payment transaction
      await client.request(
        createItem('company_credit_transactions', {
          company_credit_id: credit.id,
          type: 'payment',
          amount: amount,
          payment_reference: paymentReference,
          description: description || `Payment received: ${paymentReference}`,
          created_at: new Date().toISOString()
        })
      )

      // Update credit balances
      const result = await client.request(
        updateItem('company_credits', credit.id, {
          used_credit: Math.max(0, credit.used_credit - amount),
          available_credit: Math.min(credit.credit_limit, credit.available_credit + amount),
          last_payment_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
      )

      await logAction('company_credit_payment_processed', 'company_credits', credit.id, { amount, payment_reference: paymentReference })
      return result
    } catch (error) {
      console.error('Error processing payment:', error)
      throw error
    }
  }

  const getCreditTransactions = async (companyId, options = {}) => {
    try {
      const credit = await getCompanyCredit(companyId)
      if (!credit) return []

      const { limit = 50, page = 1, type = null } = options
      
      const filter = { company_credit_id: { _eq: credit.id } }
      if (type) filter.type = { _eq: type }

      return await client.request(
        readItems('company_credit_transactions', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'order.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching credit transactions:', error)
      return []
    }
  }

  const getCreditUtilization = async (companyId) => {
    try {
      const credit = await getCompanyCredit(companyId)
      if (!credit) return { utilization: 0, available: 0, used: 0, limit: 0 }

      const utilization = credit.credit_limit > 0 ? (credit.used_credit / credit.credit_limit) * 100 : 0
      
      return {
        utilization: Math.round(utilization * 100) / 100,
        available: credit.available_credit,
        used: credit.used_credit,
        limit: credit.credit_limit,
        currency: credit.currency
      }
    } catch (error) {
      console.error('Error calculating credit utilization:', error)
      return { utilization: 0, available: 0, used: 0, limit: 0 }
    }
  }

  const getOverdueAccounts = async () => {
    try {
      const overdueDate = new Date()
      overdueDate.setDate(overdueDate.getDate() - 30) // 30 days overdue

      return await client.request(
        readItems('company_credits', {
          filter: {
            status: { _eq: 'active' },
            used_credit: { _gt: 0 },
            last_payment_at: { _lt: overdueDate.toISOString() }
          },
          fields: [
            '*',
            'company.*'
          ],
          sort: ['last_payment_at']
        })
      )
    } catch (error) {
      console.error('Error fetching overdue accounts:', error)
      return []
    }
  }

  const getCreditStatuses = () => {
    return [
      { value: 'pending_approval', label: 'Pending Approval', color: 'orange' },
      { value: 'active', label: 'Active', color: 'green' },
      { value: 'suspended', label: 'Suspended', color: 'red' },
      { value: 'rejected', label: 'Rejected', color: 'grey' },
      { value: 'expired', label: 'Expired', color: 'purple' }
    ]
  }

  return {
    getCompanyCredit,
    createCompanyCredit,
    updateCompanyCredit,
    approveCreditLimit,
    rejectCreditLimit,
    allocateCredit,
    releaseCredit,
    processPayment,
    getCreditTransactions,
    getCreditUtilization,
    getOverdueAccounts,
    getCreditStatuses
  }
}
  
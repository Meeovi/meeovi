import { createDirectus, rest, readItems, readItem, createItem, updateItem } from '@directus/sdk'

export const useCompany = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()
  const { $auth } = useNuxtApp()

  const getCompany = memoize(async (companyId) => {
    try {
      return await client.request(
        readItem('companies', companyId, {
          fields: [
            '*',
            'owner.*',
            'employees.*',
            'employees.user.*',
            'addresses.*',
            'credit_limits.*',
            'purchase_orders.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching company:', error)
      return null
    }
  }, (companyId) => `company:${companyId}`, 300000)

  const getCompanies = async (options = {}) => {
    try {
      const {
        limit = 20,
        page = 1,
        search = '',
        status = 'active',
        industry = null
      } = options

      const filter = { status: { _eq: status } }

      if (search) {
        filter._or = [
          { name: { _contains: search } },
          { email: { _contains: search } },
          { tax_id: { _contains: search } }
        ]
      }

      if (industry) {
        filter.industry = { _eq: industry }
      }

      return await client.request(
        readItems('companies', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['name'],
          fields: [
            '*',
            'owner.*',
            'addresses.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching companies:', error)
      return []
    }
  }

  const createCompany = async (companyData) => {
    try {
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      const company = {
        ...companyData,
        owner_id: currentUser.id,
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('companies', company))
      await logAction('company_created', 'companies', result.id, companyData)
      return result
    } catch (error) {
      console.error('Error creating company:', error)
      throw error
    }
  }

  const updateCompany = async (companyId, companyData) => {
    try {
      const result = await client.request(
        updateItem('companies', companyId, {
          ...companyData,
          updated_at: new Date().toISOString()
        })
      )
      await logAction('company_updated', 'companies', companyId, companyData)
      return result
    } catch (error) {
      console.error('Error updating company:', error)
      throw error
    }
  }

  const getCompanyEmployees = async (companyId) => {
    try {
      return await client.request(
        readItems('company_employees', {
          filter: { company_id: { _eq: companyId } },
          fields: [
            '*',
            'user.*',
            'role.*'
          ],
          sort: ['created_at']
        })
      )
    } catch (error) {
      console.error('Error fetching company employees:', error)
      return []
    }
  }

  const addCompanyEmployee = async (companyId, userId, roleId) => {
    try {
      const employee = {
        company_id: companyId,
        user_id: userId,
        role_id: roleId,
        status: 'active',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('company_employees', employee))
      await logAction('employee_added', 'companies', companyId, { user_id: userId, role_id: roleId })
      return result
    } catch (error) {
      console.error('Error adding company employee:', error)
      throw error
    }
  }

  const getCompanyCreditLimit = async (companyId) => {
    try {
      const creditLimits = await client.request(
        readItems('company_credit_limits', {
          filter: {
            company_id: { _eq: companyId },
            status: { _eq: 'active' }
          },
          limit: 1,
          sort: ['-created_at']
        })
      )
      return creditLimits[0] || null
    } catch (error) {
      console.error('Error fetching company credit limit:', error)
      return null
    }
  }

  const updateCreditLimit = async (companyId, creditLimit, approvedBy) => {
    try {
      const creditData = {
        company_id: companyId,
        credit_limit: creditLimit,
        approved_by: approvedBy,
        status: 'active',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('company_credit_limits', creditData))
      await logAction('credit_limit_updated', 'companies', companyId, { credit_limit: creditLimit })
      return result
    } catch (error) {
      console.error('Error updating credit limit:', error)
      throw error
    }
  }

  const getCompanyOrders = async (companyId, options = {}) => {
    try {
      const { limit = 20, status = null } = options
      
      const filter = { company_id: { _eq: companyId } }
      if (status) filter.status = { _eq: status }

      return await client.request(
        readItems('orders', {
          filter,
          limit,
          sort: ['-created_at'],
          fields: [
            '*',
            'order_items.*',
            'order_items.product.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching company orders:', error)
      return []
    }
  }

  const getUserCompany = async () => {
    try {
      const currentUser = $auth.user
      if (!currentUser) return null

      // Check if user owns a company
      const ownedCompanies = await client.request(
        readItems('companies', {
          filter: { owner_id: { _eq: currentUser.id } },
          limit: 1
        })
      )

      if (ownedCompanies[0]) return ownedCompanies[0]

      // Check if user is an employee
      const employeeRecord = await client.request(
        readItems('company_employees', {
          filter: {
            user_id: { _eq: currentUser.id },
            status: { _eq: 'active' }
          },
          fields: ['*', 'company.*'],
          limit: 1
        })
      )

      return employeeRecord[0]?.company || null
    } catch (error) {
      console.error('Error fetching user company:', error)
      return null
    }
  }

  return {
    getCompany,
    getCompanies,
    createCompany,
    updateCompany,
    getCompanyEmployees,
    addCompanyEmployee,
    getCompanyCreditLimit,
    updateCreditLimit,
    getCompanyOrders,
    getUserCompany
  }
}
  
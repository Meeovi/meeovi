import { createDirectus, rest, createItem, readItems, readItem } from '@directus/sdk'

export const useCompliance = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  // GDPR/CCPA Data Processing Consent
  const logDataProcessing = async (customerId: string, purpose: string, legalBasis: string) => {
    try {
      await client.request(
        createItem('data_processing_logs', {
          customer_id: customerId,
          purpose,
          legal_basis: legalBasis,
          timestamp: new Date().toISOString(),
          ip_address: await getClientIP(),
          user_agent: navigator.userAgent
        })
      )
    } catch (error) {
      console.error('Error logging data processing:', error)
    }
  }

  // Tax Compliance
  const calculateTax = async (amount: number, customerAddress: any, productType: string) => {
    const taxRules = await client.request(
      readItems('tax_rules', {
        filter: {
          country: { _eq: customerAddress.country },
          state: { _eq: customerAddress.state },
          product_type: { _eq: productType },
          status: { _eq: 'active' }
        }
      })
    )

    const applicableRule = taxRules[0]
    if (!applicableRule) return { taxAmount: 0, taxRate: 0, jurisdiction: 'unknown' }

    const taxAmount = (amount * applicableRule.rate) / 100
    return {
      taxAmount,
      taxRate: applicableRule.rate,
      jurisdiction: applicableRule.jurisdiction,
      ruleId: applicableRule.id
    }
  }

  // Age Verification for Restricted Products
  const verifyAge = async (customerId: string, requiredAge: number = 18) => {
    const customer = await client.request(readItem('customers', customerId))
    if (!customer.date_of_birth) return { verified: false, reason: 'age_not_provided' }

    const age = new Date().getFullYear() - new Date(customer.date_of_birth).getFullYear()
    return { verified: age >= requiredAge, age }
  }

  const getClientIP = async () => {
    try {
      const response = await fetch('/api/client-ip')
      const data = await response.json()
      return data.ip
    } catch {
      return 'unknown'
    }
  }

  return {
    logDataProcessing,
    calculateTax,
    verifyAge
  }
}
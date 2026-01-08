import { createDirectus, rest, readItems, readItem } from '@directus/sdk'

export const useDirectory = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { memoize } = useCache()
  const loading = ref(false)
  const error = ref(null)

  const getCountries = memoize(async () => {
    try {
      loading.value = true
      error.value = null

      return await client.request(
        readItems('countries', {
          filter: { status: { _eq: 'active' } },
          sort: ['name'],
          fields: [
            '*',
            'states.*',
            'currencies.*'
          ]
        })
      )
    } catch (err) {
      error.value = err.message
      console.error('Error fetching countries:', err)
      return []
    } finally {
      loading.value = false
    }
  }, () => 'countries', 3600000) // Cache for 1 hour

  const getCountryById = memoize(async (countryId) => {
    try {
      loading.value = true
      error.value = null

      return await client.request(
        readItem('countries', countryId, {
          fields: [
            '*',
            'states.*',
            'currencies.*',
            'tax_rules.*'
          ]
        })
      )
    } catch (err) {
      error.value = err.message
      console.error('Error fetching country:', err)
      return null
    } finally {
      loading.value = false
    }
  }, (countryId) => `country:${countryId}`, 3600000)

  const getCountryByCode = memoize(async (countryCode) => {
    try {
      const countries = await client.request(
        readItems('countries', {
          filter: {
            code: { _eq: countryCode.toUpperCase() },
            status: { _eq: 'active' }
          },
          fields: [
            '*',
            'states.*',
            'currencies.*'
          ],
          limit: 1
        })
      )
      return countries[0] || null
    } catch (err) {
      console.error('Error fetching country by code:', err)
      return null
    }
  }, (countryCode) => `country:code:${countryCode}`, 3600000)

  const getStates = memoize(async (countryId) => {
    try {
      return await client.request(
        readItems('states', {
          filter: {
            country_id: { _eq: countryId },
            status: { _eq: 'active' }
          },
          sort: ['name']
        })
      )
    } catch (err) {
      console.error('Error fetching states:', err)
      return []
    }
  }, (countryId) => `states:${countryId}`, 3600000)

  const getStateById = memoize(async (stateId) => {
    try {
      return await client.request(
        readItem('states', stateId, {
          fields: [
            '*',
            'country.*'
          ]
        })
      )
    } catch (err) {
      console.error('Error fetching state:', err)
      return null
    }
  }, (stateId) => `state:${stateId}`, 3600000)

  const getCurrencyInfo = memoize(async () => {
    try {
      loading.value = true
      error.value = null

      return await client.request(
        readItems('currencies', {
          filter: { status: { _eq: 'active' } },
          sort: ['sort_order', 'name'],
          fields: [
            '*',
            'exchange_rates.*'
          ]
        })
      )
    } catch (err) {
      error.value = err.message
      console.error('Error fetching currency information:', err)
      return []
    } finally {
      loading.value = false
    }
  }, () => 'currencies', 3600000)

  const getCurrencyByCode = memoize(async (currencyCode) => {
    try {
      const currencies = await client.request(
        readItems('currencies', {
          filter: {
            code: { _eq: currencyCode.toUpperCase() },
            status: { _eq: 'active' }
          },
          limit: 1
        })
      )
      return currencies[0] || null
    } catch (err) {
      console.error('Error fetching currency by code:', err)
      return null
    }
  }, (currencyCode) => `currency:${currencyCode}`, 3600000)

  const getTimezones = memoize(async () => {
    try {
      return await client.request(
        readItems('timezones', {
          sort: ['name']
        })
      )
    } catch (err) {
      console.error('Error fetching timezones:', err)
      return []
    }
  }, () => 'timezones', 86400000) // Cache for 24 hours

  const getLanguages = memoize(async () => {
    try {
      return await client.request(
        readItems('languages', {
          filter: { status: { _eq: 'active' } },
          sort: ['name']
        })
      )
    } catch (err) {
      console.error('Error fetching languages:', err)
      return []
    }
  }, () => 'languages', 86400000)

  const getTaxRules = memoize(async (countryId = null, stateId = null) => {
    try {
      const filter = { status: { _eq: 'active' } }
      
      if (countryId) filter.country_id = { _eq: countryId }
      if (stateId) filter.state_id = { _eq: stateId }

      return await client.request(
        readItems('tax_rules', {
          filter,
          sort: ['priority'],
          fields: [
            '*',
            'country.*',
            'state.*'
          ]
        })
      )
    } catch (err) {
      console.error('Error fetching tax rules:', err)
      return []
    }
  }, (countryId, stateId) => `tax_rules:${countryId}:${stateId}`, 3600000)

  const getShippingMethods = memoize(async (countryId = null) => {
    try {
      const filter = { status: { _eq: 'active' } }
      
      if (countryId) {
        filter._or = [
          { available_countries: { _null: true } },
          { available_countries: { _contains: countryId } }
        ]
      }

      return await client.request(
        readItems('shipping_methods', {
          filter,
          sort: ['sort_order', 'name']
        })
      )
    } catch (err) {
      console.error('Error fetching shipping methods:', err)
      return []
    }
  }, (countryId) => `shipping_methods:${countryId}`, 1800000) // Cache for 30 minutes

  const getPaymentMethods = memoize(async (countryId = null) => {
    try {
      const filter = { status: { _eq: 'active' } }
      
      if (countryId) {
        filter._or = [
          { available_countries: { _null: true } },
          { available_countries: { _contains: countryId } }
        ]
      }

      return await client.request(
        readItems('payment_methods', {
          filter,
          sort: ['sort_order', 'name']
        })
      )
    } catch (err) {
      console.error('Error fetching payment methods:', err)
      return []
    }
  }, (countryId) => `payment_methods:${countryId}`, 1800000)

  const validateAddress = async (address) => {
    try {
      const country = await getCountryByCode(address.country)
      if (!country) {
        return { valid: false, message: 'Invalid country code' }
      }

      if (address.state && country.states?.length > 0) {
        const validState = country.states.find(state => 
          state.code === address.state || state.name === address.state
        )
        if (!validState) {
          return { valid: false, message: 'Invalid state/province' }
        }
      }

      // Basic postal code validation
      if (address.postal_code && country.postal_code_pattern) {
        const regex = new RegExp(country.postal_code_pattern)
        if (!regex.test(address.postal_code)) {
          return { valid: false, message: 'Invalid postal code format' }
        }
      }

      return { valid: true }
    } catch (err) {
      console.error('Error validating address:', err)
      return { valid: false, message: 'Address validation failed' }
    }
  }

  return {
    loading: readonly(loading),
    error: readonly(error),
    getCountries,
    getCountryById,
    getCountryByCode,
    getStates,
    getStateById,
    getCurrencyInfo,
    getCurrencyByCode,
    getTimezones,
    getLanguages,
    getTaxRules,
    getShippingMethods,
    getPaymentMethods,
    validateAddress
  }
}
  
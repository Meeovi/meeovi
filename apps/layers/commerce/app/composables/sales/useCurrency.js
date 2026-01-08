import { createDirectus, rest, readItems, readItem } from '@directus/sdk'

export const useCurrency = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { memoize } = useCache()
  const { $auth } = useNuxtApp()

  const getCurrencies = memoize(async () => {
    try {
      return await client.request(
        readItems('currencies', {
          filter: { status: { _eq: 'active' } },
          sort: ['sort_order', 'name']
        })
      )
    } catch (error) {
      console.error('Error fetching currencies:', error)
      return []
    }
  }, () => 'currencies', 3600000) // Cache for 1 hour

  const getExchangeRates = memoize(async () => {
    try {
      return await client.request(
        readItems('exchange_rates', {
          filter: { 
            status: { _eq: 'active' },
            updated_at: { _gte: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() }
          },
          sort: ['-updated_at']
        })
      )
    } catch (error) {
      console.error('Error fetching exchange rates:', error)
      return []
    }
  }, () => 'exchange_rates', 900000) // Cache for 15 minutes

  const getDefaultCurrency = async () => {
    const currencies = await getCurrencies()
    return currencies.find(c => c.is_default) || currencies[0] || { code: 'USD', symbol: '$' }
  }

  const getUserCurrency = async () => {
    const user = $auth.user
    if (user?.preferred_currency) {
      const currencies = await getCurrencies()
      return currencies.find(c => c.code === user.preferred_currency) || await getDefaultCurrency()
    }
    return await getDefaultCurrency()
  }

  const formatPrice = (amount, currencyCode = 'USD', locale = 'en-US') => {
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    } catch (error) {
      console.error('Error formatting price:', error)
      return `${currencyCode} ${amount.toFixed(2)}`
    }
  }

  const convertPrice = async (amount, fromCurrency, toCurrency) => {
    if (fromCurrency === toCurrency) return amount
    
    try {
      const rates = await getExchangeRates()
      const directRate = rates.find(r => r.from_currency === fromCurrency && r.to_currency === toCurrency)
      
      if (directRate) {
        return amount * directRate.rate
      }
      
      // Try reverse conversion
      const reverseRate = rates.find(r => r.from_currency === toCurrency && r.to_currency === fromCurrency)
      if (reverseRate) {
        return amount / reverseRate.rate
      }
      
      // Try conversion through USD as base currency
      const toUsdRate = rates.find(r => r.from_currency === fromCurrency && r.to_currency === 'USD')
      const fromUsdRate = rates.find(r => r.from_currency === 'USD' && r.to_currency === toCurrency)
      
      if (toUsdRate && fromUsdRate) {
        return (amount * toUsdRate.rate) * fromUsdRate.rate
      }
      
      console.warn(`No exchange rate found for ${fromCurrency} to ${toCurrency}`)
      return amount
    } catch (error) {
      console.error('Error converting price:', error)
      return amount
    }
  }

  const formatPriceWithConversion = async (amount, fromCurrency, toCurrency = null, locale = 'en-US') => {
    const targetCurrency = toCurrency || (await getUserCurrency()).code
    const convertedAmount = await convertPrice(amount, fromCurrency, targetCurrency)
    return formatPrice(convertedAmount, targetCurrency, locale)
  }

  const getCurrencySymbol = async (currencyCode) => {
    const currencies = await getCurrencies()
    const currency = currencies.find(c => c.code === currencyCode)
    return currency?.symbol || currencyCode
  }

  return {
    getCurrencies,
    getExchangeRates,
    getDefaultCurrency,
    getUserCurrency,
    formatPrice,
    convertPrice,
    formatPriceWithConversion,
    getCurrencySymbol
  }
} 
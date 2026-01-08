import { createDirectus, rest, readItems, createItem } from '@directus/sdk'
import { DefaultTaxProvider } from '../providers/base'
import type { TaxCalculation, TaxAddress, TaxableItem, TaxRate } from '../types'

export const useTaxation = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const provider = new DefaultTaxProvider()

  const calculateTax = async (items: TaxableItem[], address: TaxAddress): Promise<TaxCalculation> => {
    // Get applicable tax rates from database
    const taxRates = await getTaxRates(address)
    
    if (taxRates.length === 0) {
      return provider.calculateTax(items, address)
    }

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const breakdown = []
    let totalTax = 0

    for (const rate of taxRates) {
      const applicableItems = items.filter(item => 
        !item.isExempt && (item.taxClass === rate.taxClass || rate.taxClass === 'default')
      )
      
      const taxableAmount = applicableItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      const taxAmount = taxableAmount * (rate.rate / 100)
      
      if (taxAmount > 0) {
        breakdown.push({
          name: rate.name,
          rate: rate.rate,
          amount: taxAmount,
          taxableAmount
        })
        totalTax += taxAmount
      }
    }

    return {
      subtotal,
      taxAmount: totalTax,
      total: subtotal + totalTax,
      breakdown
    }
  }

  const getTaxRates = async (address: TaxAddress): Promise<TaxRate[]> => {
    const filter: any = {
      _and: [
        { is_active: { _eq: true } },
        { country: { _eq: address.country } }
      ]
    }

    if (address.state) {
      filter._and.push({
        _or: [
          { state: { _eq: address.state } },
          { state: { _null: true } }
        ]
      })
    }

    if (address.city) {
      filter._and.push({
        _or: [
          { city: { _eq: address.city } },
          { city: { _null: true } }
        ]
      })
    }

    return await client.request(
      readItems('tax_rates', {
        filter,
        sort: ['state', 'city', 'zip_code']
      })
    )
  }

  const createTaxRate = async (taxRate: Omit<TaxRate, 'id'>) => {
    return await client.request(createItem('tax_rates', taxRate))
  }

  const validateVATNumber = async (vatNumber: string, country: string): Promise<boolean> => {
    return await provider.validateTaxId(vatNumber, country)
  }

  const getTaxClasses = async () => {
    return await client.request(
      readItems('tax_classes', {
        filter: { is_active: { _eq: true } }
      })
    )
  }

  const calculateOrderTax = async (orderItems: any[], shippingAddress: TaxAddress, billingAddress?: TaxAddress) => {
    const taxableItems: TaxableItem[] = orderItems.map(item => ({
      id: item.product_id,
      price: item.price,
      quantity: item.quantity,
      taxClass: item.tax_class || 'default',
      isExempt: item.tax_exempt || false
    }))

    // Use shipping address for tax calculation (common practice)
    const taxAddress = shippingAddress || billingAddress
    return await calculateTax(taxableItems, taxAddress)
  }

  const saveTaxCalculation = async (orderId: string, calculation: TaxCalculation) => {
    return await client.request(createItem('tax_calculations', {
      order_id: orderId,
      subtotal: calculation.subtotal,
      tax_amount: calculation.taxAmount,
      total: calculation.total,
      breakdown: JSON.stringify(calculation.breakdown),
      calculated_at: new Date()
    }))
  }

  const getTaxReport = async (startDate: Date, endDate: Date) => {
    const calculations = await client.request(
      readItems('tax_calculations', {
        filter: {
          calculated_at: {
            _between: [startDate, endDate]
          }
        },
        fields: ['*', 'order.*']
      })
    )

    const totalTaxCollected = calculations.reduce((sum, calc) => sum + calc.tax_amount, 0)
    const totalSales = calculations.reduce((sum, calc) => sum + calc.subtotal, 0)
    const averageTaxRate = totalSales > 0 ? (totalTaxCollected / totalSales) * 100 : 0

    return {
      totalTaxCollected,
      totalSales,
      averageTaxRate,
      transactionCount: calculations.length,
      calculations
    }
  }

  return {
    calculateTax,
    getTaxRates,
    createTaxRate,
    validateVATNumber,
    getTaxClasses,
    calculateOrderTax,
    saveTaxCalculation,
    getTaxReport
  }
}
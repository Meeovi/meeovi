# Taxation Module

Enterprise tax calculation system with multi-jurisdiction support and compliance reporting.

## Features

- **Multi-Jurisdiction Tax** - Country, state, city-level tax rates
- **Tax Classes** - Product-specific tax classifications
- **Real-time Calculation** - Dynamic tax computation
- **VAT/GST Support** - International tax validation
- **Tax Exemptions** - Customer and product exemptions
- **Compliance Reporting** - Tax collection reports
- **Audit Trail** - Complete tax calculation history

## Quick Start

```typescript
// Calculate tax for order
const { calculateOrderTax, saveTaxCalculation } = useTaxation()
const taxCalc = await calculateOrderTax(orderItems, shippingAddress)

// Get tax rates for location
const rates = await getTaxRates({
  country: 'US',
  state: 'CA',
  city: 'San Francisco'
})

// Generate tax report
const report = await getTaxReport(startDate, endDate)
```

## Directus Collections

- `tax_rates` - Jurisdiction-specific tax rates
- `tax_classes` - Product tax classifications
- `tax_calculations` - Order tax computation records
- `tax_exemptions` - Customer tax exemption records
export interface TaxRate {
  id: string
  name: string
  rate: number
  country: string
  state?: string
  city?: string
  zipCode?: string
  taxClass: string
  isActive: boolean
}

export interface TaxCalculation {
  subtotal: number
  taxAmount: number
  total: number
  breakdown: TaxBreakdown[]
}

export interface TaxBreakdown {
  name: string
  rate: number
  amount: number
  taxableAmount: number
}

export interface TaxAddress {
  country: string
  state?: string
  city?: string
  zipCode?: string
}

export interface TaxableItem {
  id: string
  price: number
  quantity: number
  taxClass: string
  isExempt?: boolean
}
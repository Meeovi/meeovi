export interface POSTerminal {
  id: string
  name: string
  location: string
  isActive: boolean
  lastSync: Date
}

export interface POSTransaction {
  id: string
  terminalId: string
  customerId?: string
  items: POSItem[]
  subtotal: number
  tax: number
  discount: number
  total: number
  paymentMethod: string
  status: 'pending' | 'completed' | 'refunded'
  timestamp: Date
}

export interface POSItem {
  productId: string
  name: string
  price: number
  quantity: number
  discount?: number
  tax?: number
}

export interface CashDrawer {
  terminalId: string
  openingBalance: number
  currentBalance: number
  transactions: number
  lastOpened: Date
}

export interface POSSession {
  id: string
  terminalId: string
  userId: string
  startTime: Date
  endTime?: Date
  openingCash: number
  closingCash?: number
  totalSales: number
  status: 'active' | 'closed'
}
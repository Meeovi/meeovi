export interface StockItem {
  id: string
  productId: string
  warehouseId: string
  quantity: number
  reservedQuantity: number
  availableQuantity: number
  reorderLevel: number
  maxStockLevel: number
}

export interface StockMovement {
  id: string
  productId: string
  warehouseId: string
  type: 'in' | 'out' | 'transfer' | 'adjustment'
  quantity: number
  reason: string
  reference?: string
}

export interface Warehouse {
  id: string
  name: string
  code: string
  address: string
  isDefault: boolean
  isActive: boolean
}

export interface StockReservation {
  id: string
  productId: string
  quantity: number
  orderId: string
  expiresAt: Date
  status: 'active' | 'expired' | 'fulfilled'
}
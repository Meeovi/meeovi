export interface PaymentMethod {
  id: string
  name: string
  type: 'card' | 'wallet' | 'bank' | 'offline'
  icon?: string
  enabled: boolean
  config?: Record<string, any>
  provider?: string
}

export interface PaymentRequest {
  amount: number
  currency: string
  orderId: string
  customerId?: string
  paymentMethodId?: string
  metadata?: Record<string, any>
  billingAddress?: any
  shippingAddress?: any
}

export interface PaymentResponse {
  id: string
  status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'cancelled'
  amount: number
  currency: string
  paymentMethod: string
  transactionId?: string
  clientSecret?: string
  redirectUrl?: string
  error?: string
}

export interface RefundRequest {
  paymentId: string
  amount?: number
  reason?: string
}

export interface RefundResponse {
  id: string
  amount: number
  status: 'pending' | 'succeeded' | 'failed'
  reason?: string
}

export abstract class BasePaymentProvider {
  abstract name: string
  abstract type: string
  
  abstract createPayment(request: PaymentRequest): Promise<PaymentResponse>
  abstract confirmPayment(paymentId: string, paymentMethodId?: string): Promise<PaymentResponse>
  abstract cancelPayment(paymentId: string): Promise<boolean>
  abstract refundPayment(request: RefundRequest): Promise<RefundResponse>
  abstract getPaymentStatus(paymentId: string): Promise<PaymentResponse>
  abstract getPaymentMethods(customerId?: string): Promise<PaymentMethod[]>
  
  // Optional methods
  async savePaymentMethod?(customerId: string, paymentMethodId: string): Promise<boolean> { return false }
  async deletePaymentMethod?(paymentMethodId: string): Promise<boolean> { return false }
  async createCustomer?(customerData: any): Promise<string> { return '' }
}
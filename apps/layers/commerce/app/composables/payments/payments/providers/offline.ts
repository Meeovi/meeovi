import { BasePaymentProvider, PaymentRequest, PaymentResponse, RefundRequest, RefundResponse, PaymentMethod } from './base'

export class OfflineProvider extends BasePaymentProvider {
  name = 'Offline'
  type = 'offline'

  async createPayment(request: PaymentRequest): Promise<PaymentResponse> {
    return {
      id: `offline_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      status: 'pending',
      amount: request.amount,
      currency: request.currency,
      paymentMethod: 'offline',
      transactionId: `offline_${request.orderId}`
    }
  }

  async confirmPayment(paymentId: string): Promise<PaymentResponse> {
    return {
      id: paymentId,
      status: 'succeeded',
      amount: 0,
      currency: 'USD',
      paymentMethod: 'offline'
    }
  }

  async cancelPayment(paymentId: string): Promise<boolean> {
    return true
  }

  async refundPayment(request: RefundRequest): Promise<RefundResponse> {
    return {
      id: `refund_${Date.now()}`,
      amount: request.amount || 0,
      status: 'succeeded'
    }
  }

  async getPaymentStatus(paymentId: string): Promise<PaymentResponse> {
    return {
      id: paymentId,
      status: 'pending',
      amount: 0,
      currency: 'USD',
      paymentMethod: 'offline'
    }
  }

  async getPaymentMethods(): Promise<PaymentMethod[]> {
    return [
      { id: 'bank_transfer', name: 'Bank Transfer', type: 'bank', enabled: true },
      { id: 'check', name: 'Check Payment', type: 'offline', enabled: true },
      { id: 'cash_on_delivery', name: 'Cash on Delivery', type: 'offline', enabled: true },
      { id: 'purchase_order', name: 'Purchase Order', type: 'offline', enabled: true }
    ]
  }
}
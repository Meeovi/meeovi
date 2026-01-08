import Stripe from 'stripe'
import { BasePaymentProvider, PaymentRequest, PaymentResponse, RefundRequest, RefundResponse, PaymentMethod } from './base'

export class StripeProvider extends BasePaymentProvider {
  name = 'Stripe'
  type = 'card'
  private stripe: Stripe

  constructor(secretKey: string) {
    super()
    this.stripe = new Stripe(secretKey, { apiVersion: '2023-10-16' })
  }

  async createPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(request.amount * 100),
        currency: request.currency.toLowerCase(),
        customer: request.customerId,
        payment_method: request.paymentMethodId,
        metadata: {
          orderId: request.orderId,
          ...request.metadata
        },
        confirmation_method: 'manual',
        confirm: !!request.paymentMethodId
      })

      return {
        id: paymentIntent.id,
        status: this.mapStripeStatus(paymentIntent.status),
        amount: request.amount,
        currency: request.currency,
        paymentMethod: 'stripe',
        transactionId: paymentIntent.id,
        clientSecret: paymentIntent.client_secret || undefined
      }
    } catch (error: any) {
      return {
        id: '',
        status: 'failed',
        amount: request.amount,
        currency: request.currency,
        paymentMethod: 'stripe',
        error: error.message
      }
    }
  }

  async confirmPayment(paymentId: string, paymentMethodId?: string): Promise<PaymentResponse> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.confirm(paymentId, {
        payment_method: paymentMethodId
      })

      return {
        id: paymentIntent.id,
        status: this.mapStripeStatus(paymentIntent.status),
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency.toUpperCase(),
        paymentMethod: 'stripe',
        transactionId: paymentIntent.id
      }
    } catch (error: any) {
      return {
        id: paymentId,
        status: 'failed',
        amount: 0,
        currency: 'USD',
        paymentMethod: 'stripe',
        error: error.message
      }
    }
  }

  async cancelPayment(paymentId: string): Promise<boolean> {
    try {
      await this.stripe.paymentIntents.cancel(paymentId)
      return true
    } catch {
      return false
    }
  }

  async refundPayment(request: RefundRequest): Promise<RefundResponse> {
    try {
      const refund = await this.stripe.refunds.create({
        payment_intent: request.paymentId,
        amount: request.amount ? Math.round(request.amount * 100) : undefined,
        reason: request.reason as any
      })

      return {
        id: refund.id,
        amount: refund.amount / 100,
        status: refund.status === 'succeeded' ? 'succeeded' : 'pending'
      }
    } catch (error: any) {
      return {
        id: '',
        amount: 0,
        status: 'failed',
        reason: error.message
      }
    }
  }

  async getPaymentStatus(paymentId: string): Promise<PaymentResponse> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentId)
      
      return {
        id: paymentIntent.id,
        status: this.mapStripeStatus(paymentIntent.status),
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency.toUpperCase(),
        paymentMethod: 'stripe',
        transactionId: paymentIntent.id
      }
    } catch (error: any) {
      return {
        id: paymentId,
        status: 'failed',
        amount: 0,
        currency: 'USD',
        paymentMethod: 'stripe',
        error: error.message
      }
    }
  }

  async getPaymentMethods(customerId?: string): Promise<PaymentMethod[]> {
    if (!customerId) return []

    try {
      const paymentMethods = await this.stripe.paymentMethods.list({
        customer: customerId,
        type: 'card'
      })

      return paymentMethods.data.map(pm => ({
        id: pm.id,
        name: `**** ${pm.card?.last4}`,
        type: 'card' as const,
        enabled: true,
        config: {
          brand: pm.card?.brand,
          last4: pm.card?.last4,
          expMonth: pm.card?.exp_month,
          expYear: pm.card?.exp_year
        }
      }))
    } catch {
      return []
    }
  }

  async savePaymentMethod(customerId: string, paymentMethodId: string): Promise<boolean> {
    try {
      await this.stripe.paymentMethods.attach(paymentMethodId, { customer: customerId })
      return true
    } catch {
      return false
    }
  }

  async deletePaymentMethod(paymentMethodId: string): Promise<boolean> {
    try {
      await this.stripe.paymentMethods.detach(paymentMethodId)
      return true
    } catch {
      return false
    }
  }

  async createCustomer(customerData: any): Promise<string> {
    try {
      const customer = await this.stripe.customers.create({
        email: customerData.email,
        name: customerData.name,
        metadata: customerData.metadata
      })
      return customer.id
    } catch {
      return ''
    }
  }

  private mapStripeStatus(status: string): PaymentResponse['status'] {
    const statusMap: Record<string, PaymentResponse['status']> = {
      'requires_payment_method': 'pending',
      'requires_confirmation': 'pending',
      'requires_action': 'pending',
      'processing': 'processing',
      'succeeded': 'succeeded',
      'canceled': 'cancelled'
    }
    return statusMap[status] || 'failed'
  }
}
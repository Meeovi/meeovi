# Payment System

Enterprise-grade payment processing with multi-provider support, powered by Stripe SDK with extensible architecture.

## Features

### Core Payment Processing
- **Multi-Provider Support** - Stripe (primary), PayPal, offline methods
- **Secure Transactions** - PCI-compliant payment processing
- **Payment Methods** - Cards, wallets, bank transfers, offline payments
- **Saved Payment Methods** - Customer payment method storage
- **Refund Management** - Full and partial refunds
- **Payment History** - Complete transaction tracking

### Checkout Integration
- **Seamless Checkout** - Drop-in payment components
- **Real-time Validation** - Payment method validation
- **3D Secure Support** - Enhanced security authentication
- **Multiple Currencies** - International payment support
- **Payment Method Selection** - Dynamic payment options

### Offline Payment Support
- **Bank Transfers** - Wire transfer processing
- **Check Payments** - Traditional check handling
- **Cash on Delivery** - COD payment option
- **Purchase Orders** - B2B payment processing

### Security & Compliance
- **PCI Compliance** - Secure payment data handling
- **Tokenization** - Secure payment method storage
- **Fraud Detection** - Built-in fraud prevention
- **Encryption** - End-to-end data encryption

## Quick Start

### Basic Payment Processing
```typescript
// Process payment
const { processPayment } = usePayments()
const result = await processPayment({
  amount: 99.99,
  currency: 'USD',
  orderId: 'order_123',
  customerId: 'cust_456'
}, 'stripe')

// Checkout integration
const { loadPaymentMethods, processCheckoutPayment } = useCheckoutPayments()
await loadPaymentMethods(customerId)
const success = await processCheckoutPayment({
  amount: 149.99,
  currency: 'USD',
  orderId: 'order_789'
})
```

### Stripe Elements Integration
```typescript
// Initialize Stripe Elements
const { initializeStripe, createCardElement, confirmCardPayment } = useStripeElements()
await initializeStripe()
const cardElement = createCardElement()

// Confirm payment with 3D Secure
const paymentIntent = await confirmCardPayment(clientSecret, cardElement, {
  name: 'John Doe',
  email: 'john@example.com'
})
```

### Refund Processing
```typescript
// Process refund
const { refundPayment } = usePayments()
const success = await refundPayment('payment_123', 50.00, 'Customer request')
```

## Configuration

Set environment variables in `.env`:

```bash
# Payment Providers
PAYMENT_PROVIDERS=stripe,offline,paypal
DEFAULT_PAYMENT_PROVIDER=stripe
DEFAULT_CURRENCY=USD

# Stripe Configuration
STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key

# PayPal Configuration
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_secret
PAYPAL_SANDBOX=true
```

## Adding New Payment Providers

```typescript
import { BasePaymentProvider } from './providers/base'

class PayPalProvider extends BasePaymentProvider {
  name = 'PayPal'
  type = 'wallet'
  
  async createPayment(request: PaymentRequest): Promise<PaymentResponse> {
    // PayPal API implementation
  }
  
  async confirmPayment(paymentId: string): Promise<PaymentResponse> {
    // PayPal confirmation logic
  }
  
  // Implement other required methods...
}

// Register provider
paymentRegistry.register('paypal', new PayPalProvider(config))
```

## Directus Collections

Required collections for payment data:

### payments
- `id` (string) - Payment ID
- `order_id` (string) - Associated order
- `customer_id` (string) - Customer reference
- `provider` (string) - Payment provider name
- `amount` (decimal) - Payment amount
- `currency` (string) - Currency code
- `status` (string) - Payment status
- `transaction_id` (string) - Provider transaction ID
- `metadata` (json) - Additional payment data

### refunds
- `id` (string) - Refund ID
- `payment_id` (string) - Original payment reference
- `amount` (decimal) - Refund amount
- `status` (string) - Refund status
- `reason` (string) - Refund reason

### customer_payment_methods
- `customer_id` (string) - Customer reference
- `payment_method_id` (string) - Saved payment method ID
- `provider` (string) - Payment provider
- `is_default` (boolean) - Default payment method flag

## Payment Flow

1. **Initialize** - Load available payment methods
2. **Select** - Customer chooses payment method
3. **Process** - Create payment with provider
4. **Confirm** - Handle authentication (3D Secure, etc.)
5. **Complete** - Update order status and send confirmation

## Security Best Practices

- Never store raw card data
- Use tokenization for saved payment methods
- Implement proper error handling
- Log payment events for audit trails
- Use HTTPS for all payment communications
- Validate all payment data server-side

## Supported Payment Methods

### Online Payments
- **Credit/Debit Cards** - Visa, Mastercard, Amex, Discover
- **Digital Wallets** - Apple Pay, Google Pay, PayPal
- **Bank Transfers** - ACH, SEPA, wire transfers
- **Buy Now Pay Later** - Klarna, Afterpay integration ready

### Offline Payments
- **Bank Transfer** - Manual wire transfers
- **Check Payment** - Traditional check processing
- **Cash on Delivery** - COD with tracking
- **Purchase Order** - B2B payment terms

The payment system is designed to be Magento-comparable with enterprise features while maintaining simplicity and extensibility for custom payment providers.
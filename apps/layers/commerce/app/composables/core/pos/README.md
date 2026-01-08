# POS Module

Enterprise Point of Sale system with multi-terminal support and online synchronization.

## Features

- **Multi-Terminal Support** - Multiple POS locations
- **Session Management** - Cash drawer and shift tracking
- **Real-time Cart** - Interactive shopping cart
- **Payment Processing** - Multiple payment methods
- **Discount Management** - Item and transaction discounts
- **Reporting** - Sales reports and analytics
- **Online Sync** - Synchronization with online store

## Quick Start

```typescript
// Start POS session
const { startSession, addToCart, processTransaction } = usePOS()
await startSession(terminalId, userId, openingCash)

// Add items to cart
addToCart(product, quantity)
applyDiscount(productId, discountAmount)

// Process sale
const transaction = await processTransaction('cash', customerId)

// End session
await endSession(closingCash)
```

## Directus Collections

- `pos_terminals` - POS terminal definitions
- `pos_sessions` - Shift and cash drawer sessions
- `pos_transactions` - Individual sale transactions
- `pos_reports` - Daily sales reporting
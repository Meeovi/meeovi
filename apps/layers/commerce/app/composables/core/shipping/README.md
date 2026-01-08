# Shipping Module

Extensible shipping functionality with multi-provider support and Directus integration.

## Features

- **Multi-Provider Support** - UPS (default), FedEx, DHL
- **Real-time Rate Calculation** - Live rates with caching
- **Shipment Booking** - Create shipments with labels
- **Advanced Tracking** - Real-time status with notifications
- **Address Validation** - Verify shipping addresses
- **Bulk Operations** - Process multiple shipments
- **Webhook Integration** - Delivery notifications
- **Checkout Integration** - Drop-in shipping calculator

## Quick Start

```typescript
// Real-time rate calculation
const { calculateRates, rates, isLoading } = useRealTimeShipping()
await calculateRates(fromAddress, toAddress, packages)

// Book shipment with label
const { bookShipment } = useShipmentBooking()
const booking = await bookShipment({
  from: fromAddress,
  to: toAddress,
  packages,
  service: 'Ground'
})

// Track shipment
const { trackShipment, trackingData } = useShipmentTracking()
await trackShipment(trackingNumber)

// Address validation
const { validateShippingAddress } = useShipping()
const validAddress = await validateShippingAddress(address)
```

## Configuration

Set environment variables in `.env`:

```bash
UPS_API_KEY=your_ups_api_key
WAREHOUSE_ADDRESS=123 Main St
WAREHOUSE_CITY=Atlanta
WAREHOUSE_STATE=GA
WAREHOUSE_ZIP=30309
```

## Adding New Providers

```typescript
import { BaseShippingProvider } from './providers/base'

class FedExProvider extends BaseShippingProvider {
  name = 'FedEx'
  async getRates(from, to, packages) { /* implementation */ }
  async trackShipment(trackingNumber) { /* implementation */ }
  async createShipment(data) { /* implementation */ }
}

// Register provider
shippingRegistry.register('fedex', new FedExProvider(apiKey))
```

## Directus Collections

Required collections:
- `shipments` - Shipment records with tracking
- `shipping_rate_cache` - Cached rate calculations
- `tracking_subscriptions` - Webhook subscriptions
- `delivery_notifications` - Customer notifications
- `shipping_zones` - Zone-based shipping rules
- `warehouse_locations` - Multiple shipping origins
- `products` - Weight/dimensions for calculation
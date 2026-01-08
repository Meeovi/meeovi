# Inventory Module

Enterprise inventory management system with multi-warehouse support and real-time stock tracking.

## Features

- **Multi-Warehouse Management** - Multiple location inventory
- **Real-time Stock Tracking** - Live inventory updates
- **Stock Reservations** - Order-based stock allocation
- **Low Stock Alerts** - Automated reorder notifications
- **Stock Movements** - Complete audit trail
- **Transfer Management** - Inter-warehouse transfers

## Quick Start

```typescript
// Check stock availability
const { getStock, reserveStock } = useInventory()
const stock = await getStock(productId, warehouseId)

// Reserve stock for order
const reserved = await reserveStock(productId, quantity, orderId)

// Get low stock items
const lowStock = await getLowStockItems()
```

## Directus Collections

- `stock_items` - Current inventory levels
- `stock_movements` - Inventory transaction history
- `stock_reservations` - Order-based reservations
- `warehouses` - Storage location definitions
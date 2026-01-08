import { createDirectus, rest, readItems, createItem, updateItem } from '@directus/sdk'
import { shippingRegistry } from '../providers/registry'
import { useRealTimeShipping } from './useRealTimeShipping'
import { useShipmentBooking } from './useShipmentBooking'
import { useShipmentTracking } from './useShipmentTracking'
import type { ShippingAddress, ShippingPackage, ShippingRate } from '../providers/base'

export const useShipping = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  
  // Integrate enhanced functionality
  const realTimeShipping = useRealTimeShipping()
  const shipmentBooking = useShipmentBooking()
  const shipmentTracking = useShipmentTracking()

  const getShippingRates = async (
    fromAddress: ShippingAddress,
    toAddress: ShippingAddress,
    packages: ShippingPackage[],
    providers: string[] = ['ups']
  ): Promise<ShippingRate[]> => {
    // Try cached rates first
    const cached = await realTimeShipping.getCachedRates(fromAddress, toAddress, packages)
    if (cached) return cached

    // Calculate real-time rates
    await realTimeShipping.calculateRates(fromAddress, toAddress, packages, providers)
    return realTimeShipping.rates.value
  }

  const getProductDeliveryEstimate = async (productId: string, zipCode: string): Promise<number> => {
    const product = await client.request(
      readItems('products', {
        filter: { id: { _eq: productId } },
        fields: ['weight', 'dimensions', 'warehouse_location']
      })
    )

    if (!product.length) return 7

    const warehouseAddress = await getWarehouseAddress(product[0].warehouse_location)
    const customerAddress: ShippingAddress = {
      street: '',
      city: '',
      state: '',
      zip: zipCode,
      country: 'US'
    }

    const packages: ShippingPackage[] = [{
      weight: product[0].weight || 1,
      dimensions: product[0].dimensions || { length: 12, width: 12, height: 12 },
      value: 100
    }]

    const rates = await getShippingRates(warehouseAddress, customerAddress, packages)
    return rates.length > 0 ? Math.min(...rates.map(r => r.deliveryDays)) : 7
  }

  const createShipment = async (orderId: string, shippingData: any) => {
    const shipment = await client.request(createItem('shipments', {
      order_id: orderId,
      ...shippingData,
      status: 'pending'
    }))

    const provider = shippingRegistry.get(shippingData.carrier.toLowerCase())
    if (provider) {
      try {
        const carrierShipment = await provider.createShipment(shippingData)
        await client.request(updateItem('shipments', shipment.id, {
          tracking_number: carrierShipment.trackingNumber,
          status: 'shipped'
        }))
      } catch (error) {
        console.error('Error creating carrier shipment:', error)
      }
    }

    return shipment
  }

  const trackShipment = async (trackingNumber: string, carrier: string) => {
    const provider = shippingRegistry.get(carrier.toLowerCase())
    return provider ? await provider.trackShipment(trackingNumber) : null
  }

  const getWarehouseAddress = async (locationId: string): Promise<ShippingAddress> => {
    const location = await client.request(
      readItems('warehouse_locations', {
        filter: { id: { _eq: locationId } }
      })
    )

    return location.length > 0 ? {
      street: location[0].address,
      city: location[0].city,
      state: location[0].state,
      zip: location[0].zip,
      country: location[0].country || 'US'
    } : {
      street: '123 Main St',
      city: 'Atlanta',
      state: 'GA',
      zip: '30309',
      country: 'US'
    }
  }

  const validateShippingAddress = async (address: ShippingAddress): Promise<ShippingAddress> => {
    const provider = shippingRegistry.get('ups')
    return provider?.validateAddress ? await provider.validateAddress(address) : address
  }

  const getShippingZones = async () => {
    return await client.request(
      readItems('shipping_zones', {
        filter: { status: { _eq: 'active' } },
        fields: ['*', 'zone_rates.*']
      })
    )
  }

  return {
    // Legacy methods
    getShippingRates,
    getProductDeliveryEstimate,
    createShipment,
    trackShipment,
    
    // Enhanced functionality
    ...realTimeShipping,
    ...shipmentBooking,
    ...shipmentTracking,
    validateShippingAddress,
    getShippingZones,
    shippingRegistry
  }
}
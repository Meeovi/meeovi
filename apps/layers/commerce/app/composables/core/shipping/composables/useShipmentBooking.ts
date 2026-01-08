import { createDirectus, rest, createItem, updateItem, readItem } from '@directus/sdk'
import { shippingRegistry } from '../providers/registry'
import type { BookingRequest, BookingResponse } from '../providers/base'

export const useShipmentBooking = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const isBooking = ref(false)
  const bookingError = ref(null)

  const bookShipment = async (request: BookingRequest, orderId?: string): Promise<BookingResponse | null> => {
    isBooking.value = true
    bookingError.value = null

    try {
      const provider = shippingRegistry.get(request.service.toLowerCase().includes('ups') ? 'ups' : 'fedex')
      if (!provider) throw new Error('Provider not found')

      const booking = await provider.bookShipment(request)
      
      // Save shipment to Directus
      const shipment = await client.request(createItem('shipments', {
        order_id: orderId,
        tracking_number: booking.trackingNumber,
        carrier: provider.name,
        service: booking.service,
        cost: booking.cost,
        label_url: booking.labelUrl,
        from_address: JSON.stringify(request.from),
        to_address: JSON.stringify(request.to),
        packages: JSON.stringify(request.packages),
        status: 'booked',
        estimated_delivery: booking.estimatedDelivery
      }))

      return { ...booking, shipmentId: shipment.id }
    } catch (err) {
      bookingError.value = err
      return null
    } finally {
      isBooking.value = false
    }
  }

  const cancelShipment = async (shipmentId: string): Promise<boolean> => {
    try {
      const shipment = await client.request(readItem('shipments', shipmentId))
      const provider = shippingRegistry.get(shipment.carrier.toLowerCase())
      
      if (provider?.cancelShipment) {
        const cancelled = await provider.cancelShipment(shipment.tracking_number)
        if (cancelled) {
          await client.request(updateItem('shipments', shipmentId, { status: 'cancelled' }))
        }
        return cancelled
      }
      return false
    } catch {
      return false
    }
  }

  const getShipmentLabel = async (shipmentId: string): Promise<string | null> => {
    try {
      const shipment = await client.request(readItem('shipments', shipmentId, { fields: ['label_url'] }))
      return shipment.label_url || null
    } catch {
      return null
    }
  }

  const bulkBookShipments = async (requests: (BookingRequest & { orderId?: string })[]): Promise<BookingResponse[]> => {
    const results = []
    for (const request of requests) {
      const { orderId, ...bookingRequest } = request
      const result = await bookShipment(bookingRequest, orderId)
      if (result) results.push(result)
    }
    return results
  }

  return {
    isBooking: readonly(isBooking),
    bookingError: readonly(bookingError),
    bookShipment,
    cancelShipment,
    getShipmentLabel,
    bulkBookShipments
  }
}
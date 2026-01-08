import { createDirectus, rest, readItems, updateItem, createItem } from '@directus/sdk'
import { shippingRegistry } from '../providers/registry'
import type { TrackingInfo } from '../providers/base'

export const useShipmentTracking = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const trackingData = ref<TrackingInfo | null>(null)
  const isTracking = ref(false)
  const trackingError = ref(null)

  const trackShipment = async (trackingNumber: string, carrier?: string): Promise<TrackingInfo | null> => {
    isTracking.value = true
    trackingError.value = null

    try {
      // Get carrier from shipment record if not provided
      if (!carrier) {
        const shipments = await client.request(
          readItems('shipments', {
            filter: { tracking_number: { _eq: trackingNumber } },
            fields: ['carrier'],
            limit: 1
          })
        )
        carrier = shipments[0]?.carrier?.toLowerCase() || 'ups'
      }

      const provider = shippingRegistry.get(carrier.toLowerCase())
      if (!provider) throw new Error('Provider not found')

      const tracking = await provider.trackShipment(trackingNumber)
      trackingData.value = tracking

      // Update shipment status in Directus
      await client.request(
        updateItem('shipments', trackingNumber, {
          status: tracking.status.toLowerCase(),
          tracking_events: JSON.stringify(tracking.events),
          actual_delivery: tracking.actualDelivery
        })
      )

      return tracking
    } catch (err) {
      trackingError.value = err
      return null
    } finally {
      isTracking.value = false
    }
  }

  const trackMultipleShipments = async (trackingNumbers: string[]): Promise<TrackingInfo[]> => {
    const results = []
    for (const trackingNumber of trackingNumbers) {
      const result = await trackShipment(trackingNumber)
      if (result) results.push(result)
    }
    return results
  }

  const getShipmentHistory = async (orderId: string) => {
    return await client.request(
      readItems('shipments', {
        filter: { order_id: { _eq: orderId } },
        fields: ['*', 'tracking_events'],
        sort: ['-created_at']
      })
    )
  }

  const subscribeToTracking = async (trackingNumber: string, webhookUrl: string) => {
    return await client.request(createItem('tracking_subscriptions', {
      tracking_number: trackingNumber,
      webhook_url: webhookUrl,
      status: 'active'
    }))
  }

  const getDeliveryNotifications = async (customerId: string) => {
    return await client.request(
      readItems('delivery_notifications', {
        filter: { customer_id: { _eq: customerId } },
        sort: ['-created_at']
      })
    )
  }

  const watchTracking = (callback: (data: TrackingInfo | null) => void) => {
    watch(trackingData, callback, { immediate: true })
  }

  return {
    trackingData: readonly(trackingData),
    isTracking: readonly(isTracking),
    trackingError: readonly(trackingError),
    trackShipment,
    trackMultipleShipments,
    getShipmentHistory,
    subscribeToTracking,
    getDeliveryNotifications,
    watchTracking
  }
}
import { createDirectus, rest, readItems, readItem, createItem, updateItem } from '@directus/sdk'

export const useShipments = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { memoize } = useCache()

  const getShipments = memoize(async (options = {}) => {
    try {
      const {
        limit = 50,
        page = 1,
        search = '',
        status = null,
        orderId = null,
        carrierId = null,
        dateFrom = null,
        dateTo = null
      } = options

      const filter = {}

      if (search) {
        filter._or = [
          { tracking_number: { _contains: search } },
          { 'order.order_number': { _contains: search } },
          { 'carrier.name': { _contains: search } }
        ]
      }

      if (status) filter.status = { _eq: status }
      if (orderId) filter.order_id = { _eq: orderId }
      if (carrierId) filter.carrier_id = { _eq: carrierId }
      
      if (dateFrom && dateTo) {
        filter.shipped_at = { _between: [dateFrom, dateTo] }
      }

      return await client.request(
        readItems('shipments', {
          filter,
          limit,
          offset: (page - 1) * limit,
          sort: ['-shipped_at'],
          fields: [
            '*',
            'order.*',
            'carrier.*',
            'shipment_items.*',
            'shipment_items.product.*',
            'tracking_events.*'
          ]
        })
      )
    } catch (error) {
      console.error('Error fetching shipments:', error)
      return []
    }
  }, (options) => `shipments:${JSON.stringify(options)}`, 300000)

  const getShipmentById = memoize(async (id) => {
    try {
      return await client.request(
        readItem('shipments', id, {
          fields: [
            '*',
            'order.*',
            'order.customer.*',
            'carrier.*',
            'shipment_items.*',
            'shipment_items.product.*',
            'tracking_events.*',
            'delivery_address.*'
          ]
        })
      )
    } catch (error) {
      console.error(`Error fetching shipment with ID ${id}:`, error)
      return null
    }
  }, (id) => `shipment:${id}`, 300000)

  const createShipment = async (shipmentData) => {
    try {
      const shipment = {
        ...shipmentData,
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('shipments', shipment))
      await logAction('shipment_created', 'shipments', result.id, shipmentData)
      return result
    } catch (error) {
      console.error('Error creating shipment:', error)
      throw error
    }
  }

  const updateShipmentStatus = async (shipmentId, status, trackingNumber = null) => {
    try {
      const updateData = {
        status,
        updated_at: new Date().toISOString()
      }

      if (trackingNumber) updateData.tracking_number = trackingNumber
      if (status === 'shipped') updateData.shipped_at = new Date().toISOString()
      if (status === 'delivered') updateData.delivered_at = new Date().toISOString()

      const result = await client.request(updateItem('shipments', shipmentId, updateData))
      await logAction('shipment_status_updated', 'shipments', shipmentId, { status, tracking_number: trackingNumber })
      return result
    } catch (error) {
      console.error('Error updating shipment status:', error)
      throw error
    }
  }

  const trackShipment = async (trackingNumber) => {
    try {
      const shipments = await client.request(
        readItems('shipments', {
          filter: { tracking_number: { _eq: trackingNumber } },
          fields: [
            '*',
            'order.*',
            'carrier.*',
            'tracking_events.*',
            'delivery_address.*'
          ],
          limit: 1
        })
      )
      return shipments[0] || null
    } catch (error) {
      console.error('Error tracking shipment:', error)
      return null
    }
  }

  return {
    getShipments,
    getShipmentById,
    createShipment,
    updateShipmentStatus,
    trackShipment
  }
}
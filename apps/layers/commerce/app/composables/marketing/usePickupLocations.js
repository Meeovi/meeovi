import { createDirectus, rest, readItems, readItem } from '@directus/sdk'

export const usePickupLocations = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getPickupLocations = async (filters = {}) => {
    try {
      const filter = {
        status: { _eq: 'active' },
        ...filters
      }

      return await client.request(
        readItems('pickup_locations', {
          filter,
          sort: ['name'],
          fields: ['*']
        })
      )
    } catch (error) {
      console.error('Error fetching pickup locations:', error)
      return []
    }
  }

  const getPickupLocationById = async (locationId) => {
    try {
      return await client.request(
        readItem('pickup_locations', locationId, {
          fields: ['*']
        })
      )
    } catch (error) {
      console.error('Error fetching pickup location:', error)
      return null
    }
  }

  const searchPickupLocations = async (searchTerm, filters = {}) => {
    try {
      const filter = {
        status: { _eq: 'active' },
        _or: [
          { name: { _contains: searchTerm } },
          { address: { _contains: searchTerm } },
          { city: { _contains: searchTerm } },
          { postal_code: { _contains: searchTerm } }
        ],
        ...filters
      }

      return await client.request(
        readItems('pickup_locations', {
          filter,
          sort: ['name'],
          fields: ['*']
        })
      )
    } catch (error) {
      console.error('Error searching pickup locations:', error)
      return []
    }
  }

  const getPickupLocationsByDistance = async (coordinates, radius = 50) => {
    try {
      // For distance-based search, we'll use a custom endpoint or implement
      // a basic radius filter using lat/lng bounds
      const { latitude, longitude } = coordinates
      
      // Calculate approximate bounds (this is a simplified approach)
      const latRange = radius / 111 // Rough conversion: 1 degree ≈ 111 km
      const lngRange = radius / (111 * Math.cos(latitude * Math.PI / 180))

      const filter = {
        status: { _eq: 'active' },
        latitude: {
          _between: [latitude - latRange, latitude + latRange]
        },
        longitude: {
          _between: [longitude - lngRange, longitude + lngRange]
        }
      }

      const locations = await client.request(
        readItems('pickup_locations', {
          filter,
          fields: ['*']
        })
      )

      // Calculate actual distances and sort
      const locationsWithDistance = locations.map(location => {
        const distance = calculateDistance(
          latitude, longitude,
          location.latitude, location.longitude
        )
        return { ...location, distance }
      })
      .filter(location => location.distance <= radius)
      .sort((a, b) => a.distance - b.distance)

      return locationsWithDistance
    } catch (error) {
      console.error('Error fetching pickup locations by distance:', error)
      return []
    }
  }

  const getPickupLocationsByCity = async (city) => {
    try {
      return await client.request(
        readItems('pickup_locations', {
          filter: {
            status: { _eq: 'active' },
            city: { _icontains: city }
          },
          sort: ['name'],
          fields: ['*']
        })
      )
    } catch (error) {
      console.error('Error fetching pickup locations by city:', error)
      return []
    }
  }

  const getPickupLocationsByPostalCode = async (postalCode) => {
    try {
      return await client.request(
        readItems('pickup_locations', {
          filter: {
            status: { _eq: 'active' },
            postal_code: { _starts_with: postalCode }
          },
          sort: ['name'],
          fields: ['*']
        })
      )
    } catch (error) {
      console.error('Error fetching pickup locations by postal code:', error)
      return []
    }
  }

  const checkLocationAvailability = async (locationId, productIds = []) => {
    try {
      const location = await getPickupLocationById(locationId)
      if (!location) return { available: false, message: 'Location not found' }

      if (!location.is_active) {
        return { available: false, message: 'Location is currently inactive' }
      }

      // Check operating hours
      const now = new Date()
      const currentDay = now.getDay() // 0 = Sunday, 1 = Monday, etc.
      const currentTime = now.getHours() * 100 + now.getMinutes() // HHMM format

      const operatingHours = location.operating_hours
      if (operatingHours && operatingHours[currentDay]) {
        const { open, close } = operatingHours[currentDay]
        if (currentTime < open || currentTime > close) {
          return { 
            available: false, 
            message: 'Location is currently closed',
            nextOpenTime: operatingHours[currentDay + 1] || operatingHours[0]
          }
        }
      }

      // Check product availability if product IDs provided
      if (productIds.length > 0) {
        const inventory = await client.request(
          readItems('pickup_location_inventory', {
            filter: {
              pickup_location_id: { _eq: locationId },
              product_id: { _in: productIds },
              quantity: { _gt: 0 }
            }
          })
        )

        const availableProducts = inventory.map(item => item.product_id)
        const unavailableProducts = productIds.filter(id => !availableProducts.includes(id))

        if (unavailableProducts.length > 0) {
          return {
            available: false,
            message: 'Some products are not available at this location',
            unavailableProducts
          }
        }
      }

      return { available: true, location }
    } catch (error) {
      console.error('Error checking location availability:', error)
      return { available: false, message: 'Error checking availability' }
    }
  }

  // Helper function to calculate distance between two coordinates
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371 // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R * c // Distance in kilometers
  }

  return {
    getPickupLocations,
    getPickupLocationById,
    searchPickupLocations,
    getPickupLocationsByDistance,
    getPickupLocationsByCity,
    getPickupLocationsByPostalCode,
    checkLocationAvailability
  }
}
  
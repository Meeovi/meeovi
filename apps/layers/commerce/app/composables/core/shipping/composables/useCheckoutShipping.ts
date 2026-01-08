import { useShipping } from './useShipping'
import type { ShippingAddress, ShippingPackage } from '../providers/base'

export const useCheckoutShipping = () => {
  const { getShippingRates } = useShipping()
  
  const shippingOptions = ref([])
  const selectedShipping = ref(null)
  const isLoading = ref(false)

  const calculateShipping = async (cart: any[], shippingAddress: ShippingAddress) => {
    isLoading.value = true
    
    try {
      const packages: ShippingPackage[] = cart.map(item => ({
        weight: item.product.weight || 1,
        dimensions: item.product.dimensions || { length: 12, width: 12, height: 12 },
        value: item.product.price * item.quantity
      }))

      const warehouseAddress: ShippingAddress = {
        street: '123 Main St',
        city: 'Atlanta', 
        state: 'GA',
        zip: '30309',
        country: 'US'
      }

      const rates = await getShippingRates(warehouseAddress, shippingAddress, packages)
      shippingOptions.value = rates
      
      if (rates.length > 0 && !selectedShipping.value) {
        selectedShipping.value = rates[0]
      }
    } catch (error) {
      console.error('Error calculating shipping:', error)
    } finally {
      isLoading.value = false
    }
  }

  const selectShippingOption = (option: any) => {
    selectedShipping.value = option
  }

  const getShippingCost = () => {
    return selectedShipping.value?.cost || 0
  }

  const getDeliveryEstimate = () => {
    return selectedShipping.value?.deliveryDays || 7
  }

  return {
    shippingOptions: readonly(shippingOptions),
    selectedShipping: readonly(selectedShipping),
    isLoading: readonly(isLoading),
    calculateShipping,
    selectShippingOption,
    getShippingCost,
    getDeliveryEstimate
  }
}
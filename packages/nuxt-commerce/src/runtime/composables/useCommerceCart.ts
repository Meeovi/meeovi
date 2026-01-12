import { ref } from 'vue'
import { useNuxtApp } from '#imports'

export const useCommerceCart = () => {
  const { $commerce } = useNuxtApp()
  const cart = ref(null)

  const refresh = async () => {
    cart.value = await $commerce.getCart()
  }

  const add = async (sku: string, qty = 1) => {
    cart.value = await $commerce.addToCart(sku, qty)
  }

  return { cart, refresh, add }
}

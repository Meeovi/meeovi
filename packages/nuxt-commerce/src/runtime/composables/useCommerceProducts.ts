import { ref } from 'vue'
import { useNuxtApp } from '#imports'

export const useCommerceProducts = () => {
  const { $commerce } = useNuxtApp()
  const products = ref([])
  const loading = ref(false)

  const load = async (search?: string) => {
    loading.value = true
    products.value = await $commerce.getProducts(search)
    loading.value = false
  }

  return { products, load, loading }
}

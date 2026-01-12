import { useGqlQuery } from './useGqlQuery'
import type {
  ProductsQuery,
  ProductsQueryVariables } from '../generated/magento/graphql'
import {
  ProductsDocument,
} from '../generated/magento/graphql'

import { normalizeMagentoProduct } from '../normalization/magento/product'
import { computed } from 'vue'

export function useMagento() {
  return {
    getProduct: (sku: string) => {
      const { result, loading, error } = useGqlQuery<
        ProductsQuery,
        ProductsQueryVariables
      >(ProductsDocument, {
        filter: null,
        search: sku,
        filter1: null,
        pageSize: 1,
        currentPage: 1,
        sort: null,
      })

      const product = computed(() => {
        const item = result.value?.products?.items?.[0]
        return item ? normalizeMagentoProduct(item as any) : null
      })

      return { product, loading, error }
    },
  }
}


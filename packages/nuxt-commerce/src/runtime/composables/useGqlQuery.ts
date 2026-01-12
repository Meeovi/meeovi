/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@vue/apollo-composable'
import type { DocumentNode } from 'graphql'
import { useNuxtApp } from '#imports'

export function useGqlQuery<TData, TVars extends Record<string, any> = Record<string, any>>(
  doc: DocumentNode,
  variables?: TVars,
) {
  const { $magentoApollo } = useNuxtApp()

  return useQuery<TData, TVars>(doc, variables as TVars, {
    clientId: 'magento',
    fetchPolicy: 'cache-first',
  })
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'
import { createApolloClient } from './client'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const commerce = (config.public as any).commerce
  const client = createApolloClient(
    commerce?.magentoEndpoint,
    commerce?.magentoToken,
  )

  return {
    provide: {
      magentoApollo: client,
    },
  }
})

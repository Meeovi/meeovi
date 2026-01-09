import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { useRuntimeConfig } from 'nuxt/config';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const host = config.public.meilisearch.host
  const apiKey = config.public.meilisearch.searchApiKey

  const searchClient = instantMeiliSearch(host, apiKey)

  nuxtApp.vueApp.provide('searchClient', searchClient)
})

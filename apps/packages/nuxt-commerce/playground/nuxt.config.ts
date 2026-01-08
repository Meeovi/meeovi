import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['../src/module'],
  commerce: {
    provider: 'magento',
    endpoint: 'https://example.com/graphql',
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-01-01',
})

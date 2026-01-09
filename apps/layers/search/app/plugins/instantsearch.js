import { createApp } from 'vue'
import { defineNuxtPlugin } from 'nuxt/app'
import InstantSearch from 'vue-instantsearch/vue3/es'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(InstantSearch)
})

<template>
  <div>
    <component v-if="currentComponent" :is="currentComponent" :page="page?.value" />
    <div v-else v-dompurify-html="page?.value?.content" />
  </div>
</template>

<script setup>
  import {
    defineAsyncComponent,
    shallowRef
  } from 'vue'
  import { pageComponentMap } from '#shared/app/types/pageComponentMap'
  import {
    useRoute
  } from 'vue-router'
  import {
    useNuxtApp
  } from '#imports'

  const route = useRoute()
  const {
    $directus,
    $readItems
  } = useNuxtApp()

  // normalize slug (catch-all route can be array)
  const rawSlug = route.params.slug
  const slug = Array.isArray(rawSlug) ? rawSlug.join('/') : rawSlug

  // fetch page from Directus safely
  const {
    data: page
  } = await useAsyncData('page', async () => {
    try {
      const resp = await $directus.request(
        $readItems('pages', {
          filter: {
            slug: {
              _eq: `${slug}`
            }
          },
          fields: ['*'],
          limit: 1
        })
      )
      // Directus responses vary; try common shapes
      return resp?.data?.[0] || resp?.[0] || null
    } catch (e) {
      console.error('Failed to load page', e)
      return null
    }
  })

  useHead({
    title: page?.value?.name || 'Page'
  })


  const currentComponent = shallowRef(null)

  // decide component after page resolves
  if (page?.value) {
    const nameKey = (page.value.name || '').toLowerCase()
    const slugKey = (page.value.slug || '').toLowerCase()

    const importer = pageComponentMap[nameKey] || pageComponentMap[slugKey]
    if (importer) {
      currentComponent.value = defineAsyncComponent(importer)
    } else {
      currentComponent.value = null // fallback to raw HTML
    }
  } else {
    currentComponent.value = null
  }
</script>
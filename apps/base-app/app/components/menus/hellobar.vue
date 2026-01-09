<template>
  <div>
    <v-toolbar v-if="loggedIn === true" :color="hellobar?.color" class="helloBar"
      :style="`color: ${hellobar?.colortext}`">
      <v-toolbar-title>{{ hellobar?.description }} {{ user?.name }}</v-toolbar-title>

      <div v-for="(menu, index) in hellobar?.menus" :key="index">
        <v-toolbar-items v-if="menu?.active === 'Active'" class="helloBar-items">
          <NuxtLink :style="`color: ${hellobar?.colortext}`" :to="menu?.url">{{ menu?.name }}</NuxtLink>
        </v-toolbar-items>
      </div>
    </v-toolbar>
  </div>
</template>

<script setup>
  import { readMe } from '@directus/sdk'
  import { computed, unref } from 'vue'

  // Prefer BetterAuth `useAuth()` when available
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth: any = (globalThis as any).$useAuth ?? (typeof useAuth !== 'undefined' ? useAuth() : null)

  const user = computed(() => {
    if (!auth) return null
    if (auth.user) return unref(auth.user) || null
    if (auth.session) return unref(auth.session)?.user || null
    return null
  })
  const loggedIn = computed(() => !!(auth?.session || auth?.user))
  const fetchUserSession = async () => { if (auth?.fetchSession) return auth.fetchSession(); if (auth?.fetch) return auth.fetch(); return null }
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  let authUser = null
  try {
    authUser = await $directus.request(readMe())
  } catch (error) {
    authUser = null
  }

  const {
    data: hellobar
  } = await useAsyncData('hellobar', () => {
    return $directus.request($readItem('navigation', '50'))
  })
</script>
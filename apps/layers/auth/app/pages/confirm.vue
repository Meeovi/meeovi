<template>
  <div>Waiting for login...</div>
</template>

<script setup lang="ts">
const store = useUserStore()

watch(() => store.user, (u) => {
  if (u) return navigateTo('/')
}, { immediate: true })

setTimeout(() => {
  if (!store.user) navigateTo('/login')
}, 3000)
</script>
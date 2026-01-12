<template>
  <div>
    <div v-if="loggedIn">
      <v-toolbar :title="`Welcome, ${user?.name || user?.email}`" color="info"></v-toolbar>
    </div>

    <div v-else style="padding-top: 10px;">
      <v-btn variant="text" title="Sign In to Meeovi" text="Sign In" href="/login" style="width: 100%;"></v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, unref, computed } from 'vue'

  // BetterAuth `useAuth()` fallback
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth: any = (globalThis as any).$useAuth ?? (typeof useAuth !== 'undefined' ? useAuth() : null)

  const user = ref(null)
  const loggedIn = computed(() => !!user.value)

  // Initialize user on component mount
  onMounted(async () => {
    if (auth) {
      if (auth.user) user.value = unref(auth.user)
      else if (auth.session) user.value = unref(auth.session)?.user
      else if (typeof auth.fetchSession === 'function') {
        await auth.fetchSession()
        user.value = unref(auth.session)?.user ?? unref(auth.user)
      }
    }
  })
</script>
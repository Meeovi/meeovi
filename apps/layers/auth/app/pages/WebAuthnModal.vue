<script setup lang="ts">
  const show = ref(false)
  const logging = ref(false)
  const userName = ref('')
  const displayName = ref('')
  const company = ref('')
  const toast = useToast()

  import { computed, unref } from 'vue'
  // BetterAuth `useAuth()` fallback
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth: any = (globalThis as any).$useAuth ?? (typeof useAuth !== 'undefined' ? useAuth() : null)
  const user = computed(() => {
    if (!auth) return null
    if (auth.user) return unref(auth.user) || null
    if (auth.session) return unref(auth.session)?.user || null
    return null
  })
  const fetch = async () => { if (auth?.fetchSession) return auth.fetchSession(); if (auth?.fetch) return auth.fetch(); return null }
  const {
    register,
    authenticate,
    isSupported
  } = useWebAuthn()

  async function signUp() {
    if (logging.value || !userName.value) return
    logging.value = true
    await register({
        userName: userName.value,
        displayName: displayName.value,
        company: company.value,
      })
      .then(() => {
        fetch()
        show.value = false
      })
      .catch((err) => {
        console.log(err)
        toast.show({
          color: 'error',
          title: err.data?.message || err.message,
        })
      })
    logging.value = false
  }

  async function signIn() {
    if (logging.value) return
    logging.value = true
    await authenticate(userName.value)
      .then(() => {
        fetch()
        show.value = false
      })
      .catch((err) => {
        console.log(err)
        toast.show({
          color: 'error',
          title: err.data?.message || err.message,
        })
      })
    logging.value = false
  }

definePageMeta({
  auth: false,
  layout: false,
})
</script>

<template>
  <UButton v-if="!user?.webauthn && isSupported" size="sm" variant="subtle" color="neutral" @click="show = true">
    Passkeys
  </UButton>
  <UModal v-model:open="show" title="Login with credential" description="First time? Register your credential">
    <template #content>
      <div class="p-4">
        <form class="space-y-4" @submit.prevent="signUp">
          <UFormField label="Email" required>
            <UInput v-model="userName" name="email" type="email" />
          </UFormField>
          <UFormField label="Name" class="mt-4">
            <UInput v-model="displayName" name="name" type="text" />
          </UFormField>
          <UFormField label="Company" class="mt-4">
            <UInput v-model="company" name="name" type="text" />
          </UFormField>
          <UButton type="submit" :disabled="!userName" color="neutral" class="mt-4">
            Register
          </UButton>
        </form>

        <USeparator label="Or" class="my-4" />

        <form class="space-y-4" @submit.prevent="signIn">
          <UFormField label="Email" required>
            <UInput v-model="userName" name="email" type="email" autocomplete="username webauthn" />
          </UFormField>
          <UButton type="submit" color="neutral" class="mt-4">
            Authenticate
          </UButton>
        </form>
      </div>
    </template>
  </UModal>
</template>

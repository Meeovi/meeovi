<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="authForm">
      <NuxtImg loading="lazy" src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
      <h1 class="mbr-section-title mbr-fonts-style display-1">Reset Password</h1>

      <div class="reset-password-form">
        <form class="mbr-section-btn" :schema="schema" :state="state" @submit="onSubmit">
          <v-text-field v-model="state.Password" type="password" label="New Password" required></v-text-field>
          <v-text-field v-model="state.confirmPassword" type="password" label="Confirm Password" required></v-text-field>
          <div class="mb-3">
            <div ref="turnstileRef"></div>
          </div>
          <v-btn class="mt-2 btn btn-primary display-4" type="submit" block :loading="loading" :disabled="loading || !turnstileToken">
            Reset Password
          </v-btn>
        </form>
      </div>

      <v-alert v-if="message" :type="messageType" class="mt-4" variant="tonal">
        {{ message }}
      </v-alert>

      <div class="mt-4 text-center">
        <NuxtLink to="/login">Back to Login</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    only: 'guest'
  }
})

const { t } = useI18n()
useHead({
  title: t('resetPassword.title')
})

const auth = useAuth()
const toast = useToast()
const route = useRoute()
const localePath = useLocalePath()
const runtimeConfig = useRuntimeConfig()

const state = reactive({
  password: undefined as string | undefined,
  confirmPassword: undefined as string | undefined
})

const schema = z.object({
  password: z.string().min(8, t('resetPassword.errors.minLength', { min: 8 })),
  confirmPassword: z.string().min(8, t('resetPassword.errors.minLength', { min: 8 })).refine(val => val === state.password, {
    message: t('resetPassword.errors.passwordMismatch')
  })
})

type Schema = zodOutput<typeof schema>

const loading = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (loading.value)
    return

  loading.value = true
  const { error } = await auth.resetPassword({
    newPassword: event.data.password,
    token: route.query.token as string
  })

  if (error) {
    toast.show({
      title: error.message,
      color: 'error'
    })
  } else {
    toast.show({
      title: t('resetPassword.success'),
      color: 'success'
    })
    navigateTo(localePath(runtimeConfig.public.auth.redirectGuestTo))
  }
  loading.value = false
}
</script>

<style scoped>
  .authForm {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
  }

  .message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 4px;
  }
</style>
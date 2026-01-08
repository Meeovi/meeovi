<template>
  <div class="authPage">
    <!-- Use same layout as login but change title to "Register" -->
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary" style="height: 100vh;">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <img src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Register</strong>
              </h2>
            </div>
            <div class="form-wrap">
              <form class="row flex-center flex" :schema="schema" :state="state" @submit="onSubmit">
                <div class="col-12 form-widget">
                  <div class="mb-3">
                    <v-text-field class="inputField" placeholder="Name" v-model="state.name" required />
                  </div>
                  <div class="mb-3">
                    <v-text-field class="inputField" type="email" placeholder="Email" v-model="state.email" required />
                  </div>

                  <div class="mb-3">
                    <v-text-field class="inputField" type="password" placeholder="Password" v-model="state.password" required />
                  </div>

                  <div class="mb-3">
                    <v-text-field class="inputField" type="password" placeholder="Confirm Password" v-model="state.confirmPassword"
                      required />
                  </div>

                  <div class="mb-3">
                    <v-checkbox v-model="wantsSeller" label="I want to sell products on this platform"
                      density="comfortable" />
                  </div>
                  
                  <div class="mb-3">
                    <div ref="turnstileRef"></div>
                  </div>
                  
                  <div>
                    <v-btn type="submit" class="button block" :disabled="loading">
                      {{ loading ? 'Loading...' : 'Sign Up' }}
                    </v-btn>
                  </div>
                  <div v-if="error" class="error-message mt-3">
                    {{ error }}
                  </div>
                  <div v-if="success" class="success-message mt-3">
                    {{ success }}
                  </div>
                  <div class="mt-3 text-center">
                    <p>Already have an account?
                      <NuxtLink to="/login">Sign In</NuxtLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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
  title: t('signUp.pageTitle')
})

const auth = useAuth()
const toast = useToast()
const route = useRoute()
const localePath = useLocalePath()

const redirectTo = computed(() => {
  const redirect = route.query.redirect as string
  return localePath(redirect || '/')
})

const schema = z.object({
  name: z.string().min(5, t('signUp.form.name.error', { min: 5 })),
  email: z.email(t('signUp.form.email.error')),
  password: z.string().min(8, t('signUp.form.password.error', { min: 8 })),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: t('signUp.form.confirmPassword.error'),
  path: ['confirmPassword']
})

type Schema = zodOutput<typeof schema>

const state = reactive<Partial<Schema>>({
  name: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined
})

const loading = ref(false)
const loadingAction = ref('')

async function onSocialLogin(action: 'google' | 'github') {
  loading.value = true
  loadingAction.value = action
  auth.signIn.social({ provider: action, callbackURL: redirectTo.value })
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (loading.value)
    return
  loading.value = true
  loadingAction.value = 'submit'
  const { error } = await auth.signUp.email({
    name: event.data.name,
    email: event.data.email,
    password: event.data.password,
    polarCustomerId: ''
  })
  if (error) {
    toast.add({
      title: error.message || error.statusText,
      color: 'error'
    })
  }
  else {
    toast.add({
      title: t('signUp.sendEmailSuccess'),
      color: 'success'
    })
    state.name = undefined
    state.email = undefined
    state.password = undefined
    state.confirmPassword = undefined
  }
  loading.value = false
}
</script>
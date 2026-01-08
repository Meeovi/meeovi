<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary" style="height: 100vh;">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <img src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Login</strong>
              </h2>
            </div>
            <div class="form-wrap">
              <form class="row flex-center flex" :schema="schema" :state="state" @submit="onSubmit">
                <div class="col-12 form-widget">
                  <div class="mb-3">
                    <v-text-field class="inputField" autocomplete="email" type="email" placeholder="Email" v-model="state.email" required />
                  </div>
                  <div class="mb-3">
                    <v-text-field class="inputField" type="password" placeholder="Password" v-model="state.password"
                      required />
                  </div>
                  <div class="mb-3">
                    <v-checkbox v-model="state.rememberMe" />
                  </div>
                  <div class="mb-3">
                    <div ref="turnstileRef"></div>
                  </div>
                  <div>
                    <v-btn type="submit" class="button block" :disabled="loading">
                      {{ loading ? 'Loading...' : 'Sign In' }}
                    </v-btn>
                  </div>
                  <div v-if="error" class="error-message mt-3">
                    {{ error }}
                  </div>
                  <div v-if="success" class="success-message mt-3">
                    {{ success }}
                  </div>
                  <div class="mt-3 text-center">
                    <p>Don't have an account?
                      <NuxtLink to="/register">Sign Up</NuxtLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <p class="comment-text mbr-fonts-style align-center mb-0 display-7">
              We respect your privacy, so we never will share your info.
            </p>
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

  const {
    t
  } = useI18n()

  useHead({
    title: t('signIn.signIn')
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
    email: z.email(t('signIn.errors.invalidEmail')),
    password: z.string().min(8, t('signIn.errors.passwordLength', {
      min: 8
    })),
    rememberMe: z.boolean().optional()
  })
  type Schema = zodOutput < typeof schema >

    const state = reactive < Partial < Schema >> ({
      email: undefined,
      password: undefined,
      rememberMe: false
    })

  const loading = ref(false)
  const loadingAction = ref('')
  const isEmailVerifyModalOpen = ref(false)
  const resendLoading = ref(false)
  let unverifiedEmail = ''

  async function onSocialLogin(action: 'google' | 'github') {
    loading.value = true
    loadingAction.value = action
    auth.signIn.social({
      provider: action,
      callbackURL: redirectTo.value
    })
  }

  async function onSubmit(event: FormSubmitEvent < Schema > ) {
    if (loading.value)
      return
    loading.value = true
    loadingAction.value = 'submit'
    const {
      error
    } = await auth.signIn.email({
      email: event.data.email,
      password: event.data.password,
      rememberMe: event.data.rememberMe,
      callbackURL: redirectTo.value
    })
    if (error) {
      if (error.code === auth.errorCodes.EMAIL_NOT_VERIFIED) {
        unverifiedEmail = event.data.email
        isEmailVerifyModalOpen.value = true
        loading.value = false
        return
      }
      toast.add({
        title: error.message,
        color: 'error'
      })
    }
    loading.value = false
  }

  async function handleResendEmail() {
    if (resendLoading.value)
      return
    resendLoading.value = true
    const {
      error
    } = await auth.sendVerificationEmail({
      email: unverifiedEmail,
      callbackURL: redirectTo.value
    })
    if (error) {
      toast.add({
        title: error.message,
        color: 'error'
      })
    } else {
      toast.add({
        title: t('signIn.sendEmailSuccess'),
        color: 'success'
      })
    }

    isEmailVerifyModalOpen.value = false
    resendLoading.value = false
  }

</script>

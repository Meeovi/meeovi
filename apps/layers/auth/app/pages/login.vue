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
              <div v-if="selectedLoginMethod === 'none'" class="grid gap-4">
                <v-btn class="w-full" @click="selectedLoginMethod = 'email'">
                  <v-icon class="size-4" icon="fas fa-envelope" />
                  <span class="ml-2">Continue with Email</span>
                </v-btn>
                <v-btn variant="outlined" class="w-full" @click="signInWithGoogle">
                  <v-icon class="size-4" icon="fab fa-google" />
                  <span class="ml-2">Continue with Google</span>
                </v-btn>
              </div>

              <FormKit v-else-if="selectedLoginMethod === 'email'" id="login-form" v-slot="{ state: { valid } }"
                v-model="loginForm" type="form" :actions="false" @submit="HandleLoginUser">
                <FormKitSchema :schema="loginFormSchema" />
                <v-btn class="w-full" type="submit" :disabled="!valid"> Sign in </v-btn>
                <v-btn variant="text" class="w-full mt-2" @click="selectedLoginMethod = 'none'">
                  Back to login options
                </v-btn>
              </FormKit>

              <div class="mt-3 text-center">
                <p>Don't have an account?
                  <NuxtLink to="/register">Sign Up</NuxtLink>
                </p>
              </div>
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
  import {
    ref
  } from "vue";
  import {
    useToast
  } from "#imports";
  import {
    signIn
  } from "../../../../base-app/lib/auth-client";
  /**
   *
   * Login view
   *
   * @author Reflect-Media <reflect.media GmbH>
   * @version 0.0.1
   *
   * @todo [ ] Test the component
   * @todo [ ] Integration test.
   * @todo [✔] Update the typescript.
   */
  interface Props {
    redirectUrl ? : string;
  }

  const props = withDefaults(defineProps < Props > (), {
    redirectUrl: "/",
  });

  const loginForm = ref({
    email: "",
    password: "",
  });

  const selectedLoginMethod = ref < 'none' | 'email' | 'google' > ('none');

  const loginFormSchema = [{
      $formkit: "text",
      name: "email",
      label: "Email",
      validation: "required|email",
    },
    {
      $formkit: "password",
      name: "password",
      label: "Password",
      validation: "required|length:5,16",
    },
  ];

  const toast = useToast()

  const HandleLoginUser = async () => {
    await signIn.email({
      email: loginForm.value.email,
      password: loginForm.value.password,
      callbackURL: props.redirectUrl,
      fetchOptions: {
        onError: (context) => {
          toast.error({
            title: "Please try again",
            message: context?.error?.message || "Please check your email and password",
          });
        },
      },
    });
  };

  const signInWithGoogle = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: props.redirectUrl,
      fetchOptions: {
        onError: (context) => {
          toast.error({
            title: "Please try again",
            message: context?.error?.message || "Please check your email and password",
          });
        },
      }
    })
  }
</script>
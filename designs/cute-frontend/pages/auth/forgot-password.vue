<script setup>
  import {
    ref
  } from 'vue';
  import {
    useAuth
  } from '@/composables/useAuth';

  const {
    forgotPassword
  } = useAuth();
  const email = ref('');
  const successMessage = ref('');

  async function handleForgotPassword() {
    const success = await forgotPassword(email.value);
    if (success) {
      successMessage.value = 'Password reset email sent!';
    }
  }
</script>

<template>
  <div>
    <input v-model="email" placeholder="Enter your email" />
    <button @click="handleForgotPassword">Reset Password</button>
    <p v-if="successMessage">{{ successMessage }}</p>
  </div>
</template>
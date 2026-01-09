<script setup>
    import {
        ref
    } from 'vue';
    import {
        useAuth
    } from '@/composables/useAuth';

    const {
        login
    } = useAuth();
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    async function handleLogin() {
        const res = await login(email.value, password.value);
        if (!res.success) {
            errorMessage.value = res.message;
        }
    }
</script>

<template>
    <div>
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="handleLogin">Login</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>
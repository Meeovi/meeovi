<script setup>
    import {
        ref
    } from 'vue';
    import {
        useAuth
    } from '@/composables/useAuth';

    const {
        register
    } = useAuth();
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    async function handleRegister() {
        const res = await register(email.value, password.value);
        if (!res.success) {
            errorMessage.value = res.message;
        }
    }
</script>

<template>
    <div>
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="handleRegister">Register</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>
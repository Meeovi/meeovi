<script setup>
    import {
        ref
    } from 'vue';
    import {
        useRoute
    } from 'vue-router';
    import {
        useAuth
    } from '@/composables/useAuth';

    const {
        resetPassword
    } = useAuth();
    const route = useRoute();
    const newPassword = ref('');
    const successMessage = ref('');
    const errorMessage = ref('');

    async function handleResetPassword() {
        const success = await resetPassword(route.query.token, newPassword.value);
        if (success) {
            successMessage.value = 'Password has been reset!';
        } else {
            errorMessage.value = 'Reset failed!';
        }
    }
</script>

<template>
    <div>
        <input v-model="newPassword" type="password" placeholder="New Password" />
        <button @click="handleResetPassword">Set New Password</button>
        <p v-if="successMessage">{{ successMessage }}</p>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>
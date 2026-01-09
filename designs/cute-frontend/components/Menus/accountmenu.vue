<template>
    <div>
        <!-- Show menu if user is logged in -->
        <div v-if="user">
            <v-toolbar :title="`Welcome, ${user.emailAddress}`"></v-toolbar>
            <v-list>
                <v-list-item v-for="item in accountMenu?.menus" :key="item?.name" :title="item?.name"
                    :value="item?.name" :prepend-icon="item?.icon" :href="item?.url"></v-list-item>
            </v-list>
            <v-btn @click="logout">Logout</v-btn>
        </div>

        <!-- Show login button if user is NOT logged in -->
        <div v-else>
            <v-btn color="primary" to="/auth/login">Login</v-btn>
        </div>
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import {
        useAuth
    } from '@/composables/useAuth';

    const {
        logout,
        getSession
    } = useAuth();
    const user = ref(null);

    onMounted(() => {
        user.value = getSession();
    });

    const {
        $directus,
        $readItem
    } = useNuxtApp();

    const {
        data: accountMenu
    } = await useAsyncData('accountMenu', () => {
        return $directus.request(
            $readItem('navigation', '1', {
                fields: ['*', 'media.*.*'],
            })
        );
    });
</script>
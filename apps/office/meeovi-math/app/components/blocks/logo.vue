<template>
    <div>
        <v-app-bar-title>
            <NuxtLink class="logobrand" href="/">
                <p class="logotext fas fa-calculator">{{ blocksSiteoverview?.name }}</p>
            </NuxtLink>
        </v-app-bar-title>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocksSiteoverview
    } = await useAsyncData('blocksSiteoverview', () => {
        return $directus.request($readItem('page_blocks', '13', {
            fields: ['*', 'media.*.*'],
        }))
    })
</script>
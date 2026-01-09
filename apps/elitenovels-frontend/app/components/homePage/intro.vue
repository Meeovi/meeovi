<template>
    <div class="indexHeaderSlider">
        <v-carousel hide-delimiters show-arrows="hover" :continuous="true" v-if="blocksSlider?.length">
            <div v-for="(media, index) in blocksSlider?.media" :key="index">
                <v-carousel-item :src="`${$directus.url}assets/${media?.directus_files_id?.filename_disk}`"
                    cover></v-carousel-item>
            </div>
        </v-carousel>

        <img src="assets/images/footerimg.jpg" alt="Elite Novels">
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocksSlider
    } = await useAsyncData('blocksSlider', () => {
        return $directus.request($readItem('blocks', '8', {
            fields: ['*', 'media.*.*'],
        }))
    })
</script>
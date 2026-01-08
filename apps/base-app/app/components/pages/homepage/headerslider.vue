<template>
    <div>
        <div class="indexHeaderSlider" v-if="blocksSlider?.directus_files_id?.filename_disk">
            <v-carousel hide-delimiters show-arrows="hover" :continuous="true">
                <div v-for="(media, index) in blocksSlider?.media" :key="index">
                    <v-carousel-item :src="`${$directus.url}assets/${media?.directus_files_id?.filename_disk}`"
                        cover></v-carousel-item>
                </div>
            </v-carousel>
        </div>

        <div v-else>
            <intro />
        </div>
    </div>
</template>

<script setup>
    import intro from './intro.vue'
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocksSlider
    } = await useAsyncData('blocksSlider', () => {
        return $directus.request($readItem('page_blocks', '1', {
            fields: ['*', 'media.*.*'],
        }))
    })
</script>
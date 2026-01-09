<template>
    <div>
        <v-tabs class="resultsTabs" v-model="tab" bg-color="info" fixed-tabs>
            <v-tab value="one">All</v-tab>
            <v-tab value="two">News</v-tab>
            <v-tab value="three">Images</v-tab>
            <v-tab><a href="https://locate.meeovi.com" target="_blank">Maps</a></v-tab>
            <v-tab value="four">Videos</v-tab>
            <v-tab value="five">Shopping</v-tab>
            <a href="https://www.meeovi.com/books" target="_blank"><v-tab>Books</v-tab></a>
            <v-tab value="six">Finance</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <all />
                </v-window-item>

                <v-window-item value="two">
                    <news />
                </v-window-item>

                <v-window-item value="three">
                    <images />
                </v-window-item>

                <v-window-item value="four">
                    <videos />
                </v-window-item>

                <v-window-item value="five">
                    <shopping />
                </v-window-item>

                <v-window-item value="six">
                    <finance />
                </v-window-item>
            </v-window>
        </v-card-text>
    </div>
</template>

<script>
    import all from '../../components/Search/main.vue'
    import news from '../../components/Search/news.vue'
    import images from '../../components/Search/images.vue'
    import videos from '../../components/Search/videos.vue'
    import shopping from '../../components/Search/shopping.vue'
    import finance from '../../components/Search/finance.vue'

    export default {
        components: {
            all,
            news,
            images,
            videos,
            shopping,
            finance
        },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi Search',
    })
</script>
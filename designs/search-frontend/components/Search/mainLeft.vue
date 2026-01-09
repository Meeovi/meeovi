<template>
    <div>
        <v-list lines="three">
            <v-list-item v-for="(item, i) in searching" :key="i" link>
                <template v-slot:prepend>
                    <v-avatar class="me-4 mt-2" rounded="0">
                        <v-img :src="item.image" cover></v-img>
                    </v-avatar>
                </template>

                <v-list-item-title class="text-uppercase font-weight-regular text-caption" v-text="item.category">
                </v-list-item-title>

                <div v-text="item.title"></div>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    export default {
        data: () => ({
            items: [{
                    image: '../../assets/images/mbr.jpg',
                    title: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
                    category: 'Travel',
                    keyword: 'Drinks',

                },
                {
                    image: '../../assets/images/mbr.jpg',
                    title: 'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
                    category: 'Technology',
                    keyword: 'Phones',
                },
            ],
            search: '',
        }),

        computed: {
            keywords() {
                if (!this.search) return []

                const keywords = []

                for (const search of this.searching) {
                    keywords.push(search.keyword)
                }

                return keywords
            },
            searching() {
                if (!this.search) return this.items

                const search = this.search.toLowerCase()

                return this.items.filter(item => {
                    const text = item.title.toLowerCase()

                    return text.indexOf(search) > -1
                })
            },
        },
    }
</script>

<script setup>
    useHead({
        title: 'All Search',
    })
</script>
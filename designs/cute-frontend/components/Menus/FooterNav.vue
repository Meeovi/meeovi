<template>
    <v-footer border>
        <v-row justify="center">
            <v-col class="text-center mt-4" cols="3">
                <h6>{{ aboutmenu?.name }}</h6>
                <v-list v-for="item in aboutmenu?.menu" :key="item">
                    <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url">
                    </v-list-item>
                </v-list>
            </v-col>

            <v-col class="text-center mt-4" cols="3">
                <h6>{{ legalmenu?.name }}</h6>
                <v-list v-for="item in legalmenu?.menu" :key="item">
                    <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url">
                    </v-list-item>
                </v-list>
            </v-col>

            <v-col class="text-center mt-4" cols="3">
                <h6>PERSONALIZE</h6>
                <v-list v-for="item in accountMenu?.menu" :key="item">
                    <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url">
                    </v-list-item>
                </v-list>
            </v-col>

            <v-col class="text-center mt-4" cols="3">
                <h6>{{ connectBlock?.name }}</h6>
                <v-list-item :class="connectBlock?.description" :title="connectBlock?.content[0]?.name" :value="connectBlock?.content[0]?.name" :href="connectBlock?.content[0]?.url"></v-list-item>
            </v-col>
            <v-col class="text-center mt-4" cols="12">
                <copyright />
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    import copyright from '~/components/Menus/copyright.vue'

    const {
        data: aboutmenu
    } = await useAsyncData('aboutmenu', () => {
        return $directus.request($readItem('navigation', '3', {
            fields: ['*', 'media.*.*'],
        }))
    })

    const {
        data: legalmenu
    } = await useAsyncData('legalmenu', () => {
        return $directus.request($readItem('navigation', '2', {
            fields: ['*', 'media.*.*'],
            filter: {
                website: {
                    website_id: {
                        name: {
                            _eq: 'ShopnCute'
                        }
                    }
                }
            }
        }))
    })

    const {
        data: accountMenu
    } = await useAsyncData('accountMenu', () => {
        return $directus.request($readItem('navigation', '1', {
            fields: ['*', 'media.*.*'],
            filter: {
                website: {
                    website_id: {
                        name: {
                            _eq: 'ShopnCute'
                        }
                    }
                }
            }
        }))
    })

    const {
        data: connectBlock
    } = await useAsyncData('connectBlock', () => {
        return $directus.request($readItem('blocks', '1', {
            fields: ['*', 'media.*.*'],
            filter: {
                website: {
                    website_id: {
                        name: {
                            _eq: 'ShopnCute'
                        }
                    }
                }
            }
        }))
    })
</script>
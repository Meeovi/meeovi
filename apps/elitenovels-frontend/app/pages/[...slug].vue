<template>
    <div class="contentPage">
        <section data-bs-version="5.1" class="header01 emblemm5 cid-uLEdfj7dI6" id="header01-1k">
            <div v-if="page?.image?.length" class="mbr-fallback-image"
                :style="`background-image: url(${$directus.url}assets/${page?.image?.filename_disk}) !important`"></div>

            <div v-else-if="page?.name === 'Characters'" class="mbr-fallback-image"
                style="background-image: url(/images/thelazaronbanner-900x357.png) !important"></div>

            <div v-else-if="page?.name === 'Mythology'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-1920x1920.jpg) !important"></div>

            <div v-else-if="page?.name === 'Dictionary'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-1-700x467.jpg) !important"></div>

            <div v-else-if="page?.name === 'Monsters'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-1080x763.jpg) !important"></div>

            <div v-else-if="page?.name === 'Items'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-1920x1368.jpg) !important"></div>

            <div v-else-if="page?.name === 'Places'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-510x383.jpg) !important"></div>

            <div v-else-if="page?.name === 'Abilities'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-700x514.jpg) !important"></div>

            <div v-else-if="page?.name === 'Levels'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-1-510x340.jpg) !important"></div>

            <div v-else-if="page?.name === 'Types'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-1460x973.jpg) !important"></div>

            <div v-else-if="page?.name === 'Kids'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-1-676x676.jpg) !important"></div>

            <div v-else-if="page?.name === 'Stories'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-1460x821.jpg) !important"></div>

            <div v-else-if="page?.name === 'Videos'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-3-510x340.jpg) !important"></div>

            <div v-else-if="page?.name === 'Games'" class="mbr-fallback-image"
                style="background-image: url(/images/mbr-1920x1400.jpg) !important"></div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <div class="content-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-1">
                                <strong>{{ page?.name }}</strong>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div v-if="page?.name === 'Mythology'">
            <mythologyPage />
        </div>

        <div v-if="page?.name === 'Dictionary'">
            <dictionaryPage />
        </div>

        <div v-if="page?.name === 'Monsters'">
            <monsterPage />
        </div>

        <div v-if="page?.name === 'Items'">
            <itemPage />
        </div>

        <div v-if="page?.name === 'Places'">
            <placePage />
        </div>

        <div v-if="page?.name === 'Abilities'">
            <abilityPage />
        </div>

        <div v-if="page?.name === 'Levels'">
            <levelPage />
        </div>

        <div v-if="page?.name === 'Types'">
            <typePage />
        </div>

        <div v-if="page?.name === 'Kids'">
            <kidsPage />
        </div>

        <div v-if="page?.name === 'Stories'">
            <div class="col-md-12 col-lg-4" v-for="stories in stories" :key="stories">
                <storyComponent :story="stories" />
            </div>
        </div>

        <div v-if="page?.name === 'Videos'">
            <div class="col-md-12 col-lg-4" v-for="videos in videos" :key="videos">
                <videoComponent :video="videos" />
            </div>
        </div>

        <div v-if="page?.name === 'Kids'">
            <div class="col-md-12 col-lg-4" v-for="kids in kidCharacters" :key="kids">
                <characterComponent :character="kids" />
            </div>
        </div>

        <div v-else>
            <v-toolbar v-if="page?.description"
                title="DESCRIPTION" density="comfortable" color="transparent"></v-toolbar>

            <p class="pageDescription mbr-text mbr-fonts-style display-4" v-html="page?.content"></p>
        </div>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import mythologyPage from '~/components/pages/mythology.vue'
    import monsterPage from '~/components/pages/monsters.vue'
    import itemPage from '~/components/pages/items.vue'
    import placePage from '~/components/pages/places.vue'
    import dictionaryPage from '~/components/pages/dictionary.vue'
    import abilityPage from '~/components/pages/abilities.vue'
    import levelPage from '~/components/pages/levels.vue'
    import kidsPage from '~/components/pages/kids.vue'
    import typePage from '~/components/pages/types.vue'
    import storyComponent from '~/components/related/story.vue'
    import videoComponent from '~/components/related/video.vue'
    import characterComponent from '~/components/related/character.vue'

    const route = useRoute();
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: page
    } = await useAsyncData('page', () => {
        return $directus.request($readItems('pages', {
            fields: ['*', 'image.*'],
            filter: {
                slug: {
                    _eq: `${route.params.slug}`
                }
            },
            limit: 1
        })).then(response => response?.[0]) // Get first item from response
    })

    const {
        data: stories
    } = await useAsyncData('stories', () => {
        return $directus.request($readItems('stories', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: videos
    } = await useAsyncData('videos', () => {
        return $directus.request($readItems('videos', {
            fields: ['*', {
                'videos': ['*']
            }]
        }))
    })

    const {
        data: kidCharacters
    } = await useAsyncData('kidCharacters', () => {
        return $directus.request($readItems('characters', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                universe: {
                    universe_id: {
                        name: {
                            _eq: 'Kids'
                        }
                    }
                }
            }
        }))
    })

    useHead({
        title: computed(() => page?.value?.name || 'Page Name')
    })
</script>
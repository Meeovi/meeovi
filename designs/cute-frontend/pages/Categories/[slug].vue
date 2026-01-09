<template>
    <div>
        <section class="mbr-section content5 cid-sobHlHrKxk mbr-parallax-background" id="content5-1o"
            :background-image="`url(${result?.collection?.assets?.source}) !important`">
            <div class="container">
                <div class="media-container-row">
                    <div class="title col-12 col-md-8">
                        <h2 class="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-1">
                            {{ result?.collection?.name }}
                        </h2>
                        <h3
                            class="mbr-section-subtitle align-center mbr-light mbr-white pb-3 mbr-fonts-style display-5">
                            {{ result?.collection?.description }}
                        </h3>
                    </div>
                </div>
            </div>
        </section>

        <section class="services1 cid-sobGGg2DLI" id="services1-1l">
            <div class="container">
                <v-row class="">
                    <!--Category Products-->
                    <v-col cols="3" v-for="product in result?.collection?.productVariants?.items" :key="product.id">
                        <productCard :product="product" />
                    </v-col>
                </v-row>
            </div>
        </section>
    </div>
</template>

<script setup>
    import {
        useQuery
    } from '@vue/apollo-composable'
    import {
        useRoute
    } from 'vue-router'
    import {
        computed
    } from 'vue'
    import productCard from '~/components/product/productCard.vue'
    import {
        collection
    } from '~/graphql/queries/collection'
    const route = useRoute()

    const {
        result
    } = useQuery(collection, {
        slug: route.params.slug
    });
    useHead({
        title: computed(() => result?.value?.collection?.name || 'Category Page')
    })
</script>
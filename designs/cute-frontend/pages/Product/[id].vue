<template>
    <div>
        <section class="services2 cid-soby6viI3p" id="services2-13" style="background-color: aliceblue !important;">
            <div class="container">
                <div class="col-md-12">
                    <div class="media-container-row">
                        <div class="mbr-figure">
                            <NuxtImg :src="result?.product?.featuredAsset?.preview" :alt="result?.product?.name" />
                        </div>
                        <div class="align-left aside-content">
                            <h2 class="mbr-title pt-2 mbr-fonts-style display-2"">
                                {{ result?.product?.name }}
                            </h2>
                            <div class="mbr-section-text">
                                <p class="mbr-text text1 pt-2 mbr-light mbr-fonts-style display-7">
                                    {{ result?.product?.description }}
                                </p>
                                <p class="mbr-text text2 pt-4 mbr-light mbr-fonts-style display-2">
                                    <span
                                        class="cost">{{ result?.product?.variants?.currencyCode }}{{ result?.product?.variants?.price }}</span>
                                </p>
                            </div>
                            <!--Btn-->
                            <div class="mbr-section-btn pt-3 align-left">
                                <a href="#" class="btn btn-warning-outline display-4">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mbr-section article content1 cid-sobx2LJOrN" id="content1-10">
            <div class="container">
                <div class="media-container-row">
                    <div class="mbr-text col-12 mbr-fonts-style display-7 col-md-12">
                        <p>{{ result?.product?.description }}</p>
                    </div>
                </div>
            </div>

        <relatedproducts />
        </section>        
    </div>
</template>

<script setup>
    import relatedproducts from '~/components/related/relatedproducts.vue'
    import {
        useQuery
    } from '@vue/apollo-composable'
    import {
        product
    } from '~/graphql/queries/product'

    const route = useRoute()
    const {
        result,
        loading,
        error
    } = useQuery(product, {
        id: route.params.id
    });

    useHead({
        title: computed(() => result?.value?.product?.name || 'Product Page')
    })
</script>
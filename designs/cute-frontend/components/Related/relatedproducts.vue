<template>
    <div>
        <section data-bs-version="5.1" data-sortbtn="btn-primary" style="background-color: transparent; margin-top: 30px;">
            <div class="container-fluid">
                <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
                    Related Products
                </h2>
                <!-- Loading State -->
                <div v-if="loading" class="text-center">
                    <v-progress-circular indeterminate></v-progress-circular>
                </div>

                <!-- Products Display -->
                <v-sheet v-else class="mx-auto">
                    <v-slide-group v-model="model" class="pa-4" show-arrows>
                        <v-slide-group-item v-for="product in result?.products?.items" :key="product.id"
                            v-slot="{ isSelected, toggle, selectedClass }">
                            <productCard :product="product" :class="['ma-4', selectedClass]" @click="toggle" />

                            <div class="d-flex fill-height align-center justify-center">
                                <v-scale-transition>
                                    <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline"
                                        size="48"></v-icon>
                                </v-scale-transition>
                            </div>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>
        </section>
    </div>
</template>

<script setup>
  import productCard from '~/components/product/productCard.vue'
  import {
    ref
  } from 'vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import { products } from '~/graphql/queries/products'

  const model = ref(null);
  const {
    result,
    loading,
    error
  } = useQuery(products)
</script>

<style scoped>
    .text-error {
        color: red;
        padding: 1rem;
    }
</style>
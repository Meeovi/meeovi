<template>
  <SfButton size="sm" variant="tertiary" @click="handleCompare" :disabled="isInCompare">
    <template #prefix>
      <SfIconCompareArrows size="sm" />
    </template>
    {{ buttonText }}
  </SfButton>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useCompareStore } from '../../stores/compare';
  import type { Product } from '../../types/product';
  import { useNuxtApp } from '#app';

  // Define props
  const props = defineProps<{ product: Product }>();

  const compareStore = useCompareStore();
  const nuxtApp = useNuxtApp();

  // Check if the product is already in compare list
  const isInCompare = computed(() => {
    return compareStore.getComparedProducts.some((product) => product.sku === props.product?.sku) || compareStore.getComparedProductSkus.includes(props.product?.sku);
  });

  // Dynamically update button text
  const buttonText = computed(() => (isInCompare.value ? 'In Compare List' : 'Add to Compare'));

  // Handle Add/Remove from Compare list using Directus where possible
  const handleCompare = async () => {
    try {
      if (!props.product || !props.product.sku) {
        throw new Error('Product data is required');
      }

      const sku = props.product.sku;

      if (isInCompare.value) {
        // Remove from Directus compare_items collection if exists
        try {
          const itemsRes = await nuxtApp.$readItems('compare_items', { filter: { sku: { _eq: sku } } });
          const items = itemsRes?.data || itemsRes || [];
          for (const it of items) {
            const id = it.id || it._id || it.ID;
            if (id) await nuxtApp.$deleteItem('compare_items', id);
          }
        } catch (e) {
          // ignore Directus errors, still update local store
          console.warn('Directus remove compare item failed:', e);
        }

        compareStore.removeComparedProduct(sku);
      } else {
        // Add to Directus compare_items collection
        try {
          await nuxtApp.$createItem('compare_items', { sku });
        } catch (e) {
          console.warn('Directus create compare item failed:', e);
        }

        compareStore.addComparedProductSku(sku);
      }
    } catch (error) {
      console.error('Error handling compare:', error);
    }
  };
</script>
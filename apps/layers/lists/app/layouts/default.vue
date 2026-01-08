<template>
  <v-responsive>
    <lowernav />
    <slot />
  </v-responsive>
</template>

<script setup>
import lowernav from '~/components/menus/lowernav.vue'

</script>
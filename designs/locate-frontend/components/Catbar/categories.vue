<template>
    <v-card>
      <v-tabs class="catbar" bg-color="deep-orange-darken-4" center-active>
        <v-tab><a href="/categories/">All Categories</a></v-tab>
        <v-tab><a href="/news/">News</a></v-tab>
        <v-tab><a href="/restaurants/">Restaurants</a></v-tab>
        <v-tab><a href="/travel/">Travel</a></v-tab>
        <v-tab><a href="/weather/">Weather</a></v-tab>
        <v-tab><a href="/time/">Time</a></v-tab>
      </v-tabs>
    </v-card>
  </template>

<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>
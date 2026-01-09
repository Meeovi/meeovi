<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-location-dot"></v-icon> US
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="US" value="us" href="/"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-language"></v-icon> EN
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="EN" value="en" href="/"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-dollar-sign"></v-icon> USD
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="USD" value="usd" href="/"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </div>

      <v-spacer></v-spacer>
      <v-app-bar-title><headerNav /></v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <v-btn @click="toggleDark()" variant="text">
            <v-icon>
              {{ isDark ? 'fas fa-moon' : 'fas fa-sun' }}
            </v-icon>
          </v-btn>
        </v-col>
        
        <v-col>
          <search />
        </v-col><!--  -->

        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <accountmenu />
            </v-list>
          </v-menu>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <catbar />
            <slot />
          </main>
        </v-layout>
      </v-card>
      <FooterNav />
    </v-main>
  </v-app>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    useDark,
    useToggle
  } from '@vueuse/core'
  import {
    useTheme
  } from 'vuetify'
  import search from '~/components/search/search.vue'
  import headerNav from '~/components/menus/header.vue'
  import FooterNav from '~/components/menus/FooterNav.vue'
  import catbar from '~/components/menus/catbar.vue'
  import accountmenu from '~/components/Menus/accountmenu.vue'

  const location = ref('bottom')
  const theme = useTheme()
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const drawer = ref(null);

  // Sync Vuetify theme with dark mode
  watch(isDark, (dark) => {
    theme.global.name.value = dark ? 'dark' : 'light'
  }, {
    immediate: true
  })

useHead({
  title: 'ShopnCute',
  htmlAttrs: {
    // uncomment this line to simulate dark mode
    // class: 'dark',
  },
});
</script>
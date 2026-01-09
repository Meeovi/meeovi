<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Discover
        </v-btn>
      </template>

      <v-app-bar-title><a class="logobrand" href="/app/">
          <v-icon start icon="fas fa-asterisk"></v-icon> Meeovi Start
        </a></v-app-bar-title>

      <v-text-field density="compact" variant="solo" label="Search" append-inner-icon="fas fa-search" single-line
        hide-details @click:append-inner="onClick"></v-text-field>
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-bell"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="" value="" href="/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="Show More" value="Show More" href="/admin/user/notifications">
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col>
          <ecosystemmenu />
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="My Account" value="my account" href="/admin/user/"></v-list-item>
              <v-list-item title="Logout" value="logout" href="/logout"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer v-model="drawer" temporary>
            <v-list nav>
            <v-list-item prepend-icon="fas fa-compass" title="Discover" value="Discover" href="/app/"></v-list-item>
            <v-list-item prepend-icon="fas fa-chess-pawn" title="My Interests" value="My Interests" href="/app/admin/interests"></v-list-item>
            <v-list-item prepend-icon="fas fa-user-circle" title="Profile" value="Profile" href="/app/admin/user/"></v-list-item>
            <v-divider></v-divider>
            <v-list-item prepend-icon="fas fa-newspaper" title="News" value="News" href="/app/news/"></v-list-item>
            <v-list-item prepend-icon="fas fa-note-sticky" title="Notes" value="Notes" href="/app/notes/"></v-list-item>
            <v-list-item prepend-icon="fas fa-cloud" title="Weather" value="Weather" href="/app/weather/"></v-list-item>
            <v-list-item prepend-icon="fas fa-location-dot" title="Travel" value="Travel" href="/app/travel/"></v-list-item>
            <v-list-item prepend-icon="fas fa-money-bills" title="Finance" value="Finance" href="/app/finance/"></v-list-item>
            <v-divider></v-divider>
            <v-list-item prepend-icon="fas fa-shopping-cart" title="Shopping" value="Shopping" href="https://www.meeovi.com"></v-list-item>
            <v-list-item prepend-icon="fas fa-images" title="Images" value="Images" href="https://www.pixanomy.com"></v-list-item>
            <v-list-item prepend-icon="fas fa-face-grin-hearts" title="Dating" value="Dating" href="https://www.here2mingle.com"></v-list-item>
            <v-list-item prepend-icon="fas fa-briefcase" title="Productivity" value="Productivity" href="https://www.collaborrate.com"></v-list-item>
            <v-list-item prepend-icon="fas fa-bookmark" title="Bookmarks" value="Bookmarks" href="https://bookmarks.meeovi.com"></v-list-item>
            <v-spacer></v-spacer>
            </v-list>
          </v-navigation-drawer>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <quotebar />
            <div class="contentSection"><slot /></div>
          </main>
        </v-layout>
        <FooterNav />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
  import search from '../components/Search/search.vue'
  import quotebar from '../components/Menus/quotebar.vue'
  import ecosystemmenu from '../components/Menus/ecosystemmenu.vue'

  export default {
    components: {
      quotebar,
      ecosystemmenu,
      search
    },
    data() {
      return {
        drawer: null,
        location: 'bottom',
        rail: true,
        loaded: false,
        loading: false,
      }
    },

    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>

<script setup>
  import {
    ref
  } from 'vue'

  const theme = ref('light')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };
</script>
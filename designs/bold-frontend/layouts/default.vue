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
      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon color="primary" start icon="fas fa-shirt"></v-icon>ShopnBold
        </a></v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <!--  <v-col>
          <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>-->
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props" href="/stars">
                <v-icon color="primary" start icon="fas fa-star"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="" value="" href="/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="All Notifications" value="notifications" href="/user/notifications">
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="My Account" value="my account" href="/user/"></v-list-item>
              <v-list-item title="My Orders" value="my Orders" href="/user/"></v-list-item>
              <v-list-item title="My Loyalty" value="my Loyalty" href="/user/"></v-list-item>
              <v-list-item title="My Reviews" value="my Reviews" href="/user/"></v-list-item>
              <v-list-item title="My Stars" value="my Stars" href="/user/"></v-list-item>
              <v-list-item title="My Wish List" value="my Wish List" href="/user/"></v-list-item>
              <v-list-item title="My Designers" value="my Designers" href="/user/"></v-list-item>
              <v-list-item title="Logout" value="logout" href="/logout"></v-list-item>
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

<script>
  import search from '../components/Search/search.vue'
  import catbar from '../components/Catbar/categories.vue'

  export default {
    data() {
      return {
        components: {
          search,
          catbar
        },
        drawer: null,
        location: 'bottom',
        items: [{
            title: 'Home',
            icon: 'fas fa-home'
          },
          {
            title: 'Content Manager',
            icon: 'fas fa-feather-pointed'
          },
          {
            title: 'Settings',
            icon: 'fas fa-gear'
          },
        ],
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
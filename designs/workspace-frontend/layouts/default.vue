<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>

      <v-app-bar-title><a class="logobrand" href="/app/">
          <v-icon start icon="fas fa-diagram-project"></v-icon>Meeovi Workspace
        </a></v-app-bar-title>

      <v-text-field density="compact" variant="solo" label="Search in workspace" append-inner-icon="fas fa-search"
        single-line hide-details @click:append-inner="onClick"></v-text-field>
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
              <v-list-item title="" value="" href="/app/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="All Notifications" value="notifications" href="/admin/user/notifications">
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
          <v-navigation-drawer class="mainbar" permanent :rail="rail" @click="rail = false">
            <v-row justify="center">
              <ul>
                <li></li>
                <v-spacer></v-spacer>

                <li>
                  <v-btn stacked size="small" prepend-icon="fas fa-diagram-project" variant="text" href="/app/projects/">Projects</v-btn>
                </li>

                <li>
                  <v-btn stacked size="small" prepend-icon="fas fa-clipboard-list" variant="text" href="/app/lists/">Lists</v-btn>
                </li>

                <li>
                  <v-btn stacked size="small" prepend-icon="fas fa-ticket" variant="text" href="/app/tickets/">Tickets</v-btn>
                </li>

                <li>
                  <v-btn stacked size="small" prepend-icon="fas fa-cog" variant="text" href="/app/settings/">Settings</v-btn>
                </li>

              </ul>
            </v-row>
            <div class="pa-2">
              <v-btn block>
                Logout
              </v-btn>
            </div>
          </v-navigation-drawer>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
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
  import ecosystemmenu from '../components/Menus/ecosystemmenu.vue'
  import projectmenu from '../components/Menus/Default/projectmenu.vue'
  import listsmenu from '../components/Menus/Default/listsmenu.vue'
  import ticketsmenu from '../components/Menus/Default/ticketsmenu.vue'
  import settingsmenu from '../components/Menus/Default/settingsmenu.vue'

  export default {
    components: {
      ecosystemmenu,
      projectmenu,
      listsmenu,
      ticketsmenu,
      settingsmenu,
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

  const theme = ref('dark')

  function onClick() {
    theme.value = theme.value === 'dark' ? 'dark' : 'light'
  };
</script>
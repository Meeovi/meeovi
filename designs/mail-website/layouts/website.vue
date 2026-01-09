<template>
    <v-app :theme="theme">
        <v-app-bar id="topnav" density="compact">
            <!--<template v-slot:prepend>
          <v-btn variant="flat" @click="drawer = !drawer">
            <v-icon start icon="fas fa-bars"></v-icon> Menu
          </v-btn>
        </template>-->

            <v-app-bar-title><a class="logobrand" href="/">
                    <v-icon start icon="fas fa-envelope"></v-icon>Meeovi Mail
                </a></v-app-bar-title>

            <v-spacer></v-spacer>

            <v-list-item title="Home" value="Home" href="/"></v-list-item>
            <v-list-item title="Features" value="Features" href="/website/features"></v-list-item>
            <v-list-item title="About" value="About" href="/website/about"></v-list-item>

            <v-spacer></v-spacer>

            <div class="d-flex align-center flex-column flex-sm-row fill-height">
                <!--<v-col>
                    <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
                </v-col>-->

                <v-col>
                    <ecosystemmenu />
                </v-col>
                <v-col>
                    <v-btn href="/app/inbox">Login / Signup</v-btn>
                </v-col>
            </div>
        </v-app-bar>

        <v-main>
            <v-card>
                <v-layout>
                    <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
                        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider"
                            nav>
                            <template v-slot:append>
                                <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
                            </template>
                        </v-list-item>

                        <v-list density="compact" nav>
                            <v-list-item prepend-icon="fas fa-home" title="Home" value="home" href="/"></v-list-item>
                            <v-list-group prepend-icon="fas fa-feather-pointed" value="content manager">
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props" title="Content Manager"></v-list-item>
                                </template>
                                <v-list-item prepend-icon="fas fa-feather" title="Blog" value="Blog"
                                    href="/Admin/Content/Blog">
                                </v-list-item>
                            </v-list-group>
                            <v-list-item prepend-icon="fas fa-user" title="Customers" value="Customers"
                                href="/Admin/Customers">
                            </v-list-item>
                            <v-list-item prepend-icon="fas fa-gear" title="Settings" value="settings"
                                href="/Admin/Settings/general-settings"></v-list-item>
                        </v-list>

                        <v-spacer></v-spacer>

                        <div class="pa-2">
                            <v-btn block>
                                Logout
                            </v-btn>
                        </div>
                    </v-navigation-drawer>
                    <v-main id="sidebarNav"></v-main>
                    <main id="mainWebsite">
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
    import ecosystemmenu from '../components/ecosystemmenu.vue'

    export default {
        components: {
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
<template>
    <v-card>
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab :value="1">Apps</v-tab>
            <v-tab :value="2">Extensions</v-tab>
            <v-tab :value="3">Themes</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item :value="1">
                    <v-toolbar dark prominent image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>

                        <v-toolbar-title>Vuetify</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-list-item title="Apps"></v-list-item>

                        <v-spacer></v-spacer>

                        <v-list-item title="Modified"></v-list-item>

                        <v-spacer></v-spacer>

                        <v-btn href="">Open</v-btn>
                    </v-toolbar>
                </v-window-item>

                <v-window-item :value="2">
                    Two
                </v-window-item>

                <v-window-item :value="3">
                    Three
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            tab: null,
        }),
    }
</script>
<template>
    <div>
        <v-toolbar class="pagetoolbar" color="transparent" density="compact" elevation="1">
            <v-btn prepend-icon="fas fa-home" variant="text">Bookmarks</v-btn>

            <v-spacer></v-spacer>

            <addbookmark />
        </v-toolbar>
        
        <v-row class="contentSection">
            <v-col cols="4">
                <a href="">
                    <v-card class="mx-auto" max-width="400">
                        <img class="align-end text-white" height="200"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover />
                        <v-card-title>Top 10 Australian beaches</v-card-title>

                        <v-card-subtitle class="pt-4">
                            Number 10
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Whitehaven Beach</div>

                            <div>Whitsunday Island, Whitsunday Islands</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="orange">
                                Share
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import addbookmark from '../../../components/Content/bookmark/Add/add-bookmark.vue'

    export default {
        components: {
            addbookmark
        },
    }
</script>

<script setup>
    useHead({
        title: 'Bookmarks'
    })
</script>
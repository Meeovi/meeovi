<template>
    <div>
        <profilebar/>
        <v-row>
            <v-col cols="12">
                <v-toolbar title="PRODUCT REVIEWS" density="comfortable" color="transparent"></v-toolbar>
            </v-col>
            <v-col cols="3" v-for="n in 4" :key="n">
                <v-card class="mx-auto" max-width="300">
                    <v-img class="align-end text-white" height="350"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                    </v-img>
                    <v-card-title>Top 10 Australian beaches</v-card-title>

                    <v-card-subtitle class="pt-4">
                        Published: 
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="pink" variant="outlined">
                            Read More
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../components/Menus/profilebar.vue'

    export default {
        components: { profilebar },
    }
</script>

<script setup>
    useHead({
        title: 'Reviews',
    })
</script>
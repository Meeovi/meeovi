<template>
    <div>
        <v-toolbar style="background-color: green; color: white;">
            <v-toolbar-title>Courses</v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col cols="12"><h4>Current Courses</h4></v-col>
            <v-col cols="4">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>
                    <v-card-subtitle class="pt-4">
                        Number 10
                    </v-card-subtitle>
                    <v-card-text>
                        <div>Whitehaven Beach</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="orange">
                            Share
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12"><h4>Upcoming Courses</h4></v-col>
            <v-col cols="4">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>
                    <v-card-subtitle class="pt-4">
                        Number 10
                    </v-card-subtitle>
                    <v-card-text>
                        <div>Whitehaven Beach</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="orange">
                            Share
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12"><h4>Completed Courses</h4></v-col>
            <v-col cols="4">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>
                    <v-card-subtitle class="pt-4">
                        Number 10
                    </v-card-subtitle>
                    <v-card-text>
                        <div>Whitehaven Beach</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="orange">
                            Share
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Courses'
    })
</script>
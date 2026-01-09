<template>
    <v-card>
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">Overview</v-tab>
            <v-tab value="two">Our Approach</v-tab>
            <v-tab value="three">How Search works</v-tab>
            <v-tab value="four">Features</v-tab>
            <v-tab value="five">Our History</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <overview />
                </v-window-item>

                <v-window-item value="two">
                    <approach />
                </v-window-item>

                <v-window-item value="three">
                    <howsearchworks />
                </v-window-item>

                <v-window-item value="four">
                    <features />
                </v-window-item>

                <v-window-item value="five">
                    <ourhistory />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import overview from '../components/howsearchworks/overview.vue'
import approach from '../components/howsearchworks/approach.vue'
import howsearchworks from '../components/howsearchworks/howsearchworks.vue'
import features from '../components/howsearchworks/features.vue'
import ourhistory from '../components/howsearchworks/ourhistory.vue'

    export default {
        components: { overview, approach, howsearchworks, features, ourhistory },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'How Search Works',
    })
</script>
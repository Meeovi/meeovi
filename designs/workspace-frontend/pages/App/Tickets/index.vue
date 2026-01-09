<template>
    <v-card>
        <v-toolbar density="compact" color="danger" title="Tickets"></v-toolbar>
        <v-tabs v-model="tab" bg-color="danger">
            <v-tab :value="1">Home</v-tab>
            <v-tab :value="2">My Tickets</v-tab>
            <v-tab :value="3">Cases</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item :value="1">
                    <tickets />
                </v-window-item>

                <v-window-item :value="2">
                    <mytickets />
                </v-window-item>

                <v-window-item :value="3">
                    <cases />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import tickets from './tickets.vue'
import mytickets from './mytickets.vue'
import cases from './cases.vue'

    export default {
        components: { tickets, mytickets, cases },
        data: () => ({
            tab: null,
        }),
    }
</script>
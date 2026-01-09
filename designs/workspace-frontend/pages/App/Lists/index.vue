<template>
    <v-card>
        <v-toolbar density="compact" color="info" title="Lists"></v-toolbar>
        <v-tabs v-model="tab" bg-color="info">
            <v-tab :value="1">Dashboard</v-tab>
            <v-tab :value="2">My Tasks</v-tab>
            <v-tab :value="3">Reporting</v-tab>
            <v-tab :value="4">Workspaces</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item :value="1">
                    <lists />
                </v-window-item>

                <v-window-item :value="2">
                    <checklists />
                </v-window-item>

                <v-window-item :value="3">
                    <roadmaps />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import lists from './lists.vue'
import checklists from './checklists.vue'
import roadmaps from './roadmaps.vue'

    export default {
        components: { lists, checklists, roadmaps },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Lists'
    })
</script>
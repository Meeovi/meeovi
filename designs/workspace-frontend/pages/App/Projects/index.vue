<template>
    <v-card>
        <v-toolbar density="compact" color="primary" title="Projects"></v-toolbar>
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab :value="1">Dashboard</v-tab>
            <v-tab :value="2">My Tasks</v-tab>
            <v-tab :value="3">Reporting</v-tab>
            <v-tab :value="4">Workspaces</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item :value="1">
                    <dashboard />
                </v-window-item>

                <v-window-item :value="2">
                    <mytasks />
                </v-window-item>

                <v-window-item :value="3">
                    <reporting />
                </v-window-item>

                <v-window-item :value="4">
                    <workspaces />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import dashboard from './dashboard.vue'
import mytasks from './mytasks.vue'
import reporting from './reporting.vue'
import workspaces from './workspaces.vue'

    export default {
        components: { dashboard, mytasks, reporting, workspaces },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Projects'
    })
</script>
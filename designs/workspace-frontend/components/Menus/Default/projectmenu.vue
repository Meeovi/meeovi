<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-diagram-project" variant="text" v-bind="props">Projects</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Projects</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                        <v-list>
                            <v-list-item title="Projects Dashboard" value="Projects Dashboard" href="/app/Projects/"></v-list-item>
                            <v-list-item title="My Tasks" value="My Tasks" href="/app/Projects/Tasks"></v-list-item>
                            <v-list-item title="Reporting" value="Reporting" href="/app/Projects/Reporting"></v-list-item>
                            <v-list-item title="Workspaces" value="Workspaces" href="/app/Projects/Workspaces"></v-list-item>
                        </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {

        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            }
        },
    }
</script>
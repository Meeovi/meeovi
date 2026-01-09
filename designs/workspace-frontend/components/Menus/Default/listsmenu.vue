<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-clipboard-list" variant="text" v-bind="props">Lists
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Lists</span>
                </v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item title="Lists Dashboard" value="Lists" href="/app/lists/lists"></v-list-item>
                        <v-list-item title="Checklists" value="Checklists" href="/app/lists/checklists"></v-list-item>
                        <v-list-item title="Roadmaps" value="roadmaps" href="/app/lists/roadmaps"></v-list-item>
                        <v-list-item title="Lists Control" value="Lists Control" href="/app/lists/control">
                        </v-list-item>
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
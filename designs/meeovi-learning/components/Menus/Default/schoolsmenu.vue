<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-diagram-project" variant="text" v-bind="props">Schools</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Schools</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                        <v-list>
                            <v-list-item prepend-icon="fas fa-pen-nib" title="Schools Dashboard" value="Schools Dashboard"
                                href="/Admin/Schools/Dashboard"></v-list-item>
                            <v-list-item prepend-icon="fas fa-pen" title="List of Schools" value="List of Schools" href="/Admin/Schools/lists">
                            </v-list-item>
                            <v-list-item prepend-icon="fas fa-rss" title="Students" value="Students"
                                href="/Admin/Schools/Students">
                            </v-list-item>
                            <v-list-item prepend-icon="fas fa-rss" title="Teachers" value="Teachers"
                                href="/Admin/Schools/Teachers">
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
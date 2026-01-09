<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-ticket" variant="text" v-bind="props">Tickets
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Tickets</span>
                </v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item title="Tickets" value="Tickets" href="/app/Tickets/"></v-list-item>
                        <v-list-item title="My Tickets" value="My Tickets" href="/app/Tickets/mytickets"></v-list-item>
                        <v-list-item title="Cases" value="Cases" href="/app/Tickets/cases"></v-list-item>
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
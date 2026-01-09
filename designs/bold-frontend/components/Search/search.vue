<template>
    <v-row justify="space-around">
        <v-col cols="auto">
            <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                    <v-btn variant="text" size="x-small" v-bind="props" icon="fas fa-search"></v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-toolbar color="primary" title="Search Our Store"></v-toolbar>
                        <v-card-text>
                            <v-text-field density="compact" variant="solo" label="Search"
                                append-inner-icon="fas fa-search" single-line hide-details
                                @click:append-inner="onClick"></v-text-field>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>

<script setup>


</script>
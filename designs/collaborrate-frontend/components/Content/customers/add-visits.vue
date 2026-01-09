<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn class="createteambtn" color="primary" dark v-bind="props">
                    Create A Visit
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon icon="fas fa-xmark"></v-icon>
                    </v-btn>
                    <v-toolbar-title>Create A Team</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn variant="outlined" @click="dialog = false">
                            Create new team
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-row class="createteamform">
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Team Name" hint="For example: Marketing or Design"
                                    variant="outlined"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-combobox v-model="select"
                                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                    label="Members" hint="Add team members by name or email" multiple chips>
                                </v-combobox>
                            </v-col>

                            <v-col cols="12">
                                <v-radio-group label="Team Privacy Types">
                                    <v-radio label="Membership by request" value="1"></v-radio>
                                    <v-radio label="Private" value="2"></v-radio>
                                    <v-radio label="Public to organization" value="3"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="6">
                        <v-img aspect-ratio="1/1" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                    </v-col>
                </v-row>
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

<script setup>

</script>
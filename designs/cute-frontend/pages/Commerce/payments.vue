<template>
    <div>
        <profilebar />
        <v-row class="paymentPage">
            <v-col cols="3" v-for="n in 4" :key="n">
                <v-dialog v-model="dialog" width="1024">
                    <template v-slot:activator="{ props }">
                        <v-card class="mx-auto" v-bind="props" max-width="400">
                            <v-img class="align-end text-white" height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                            </v-img>
                            <v-card-title>Payment Name</v-card-title>

                            <v-card-actions>
                                <v-btn color="pink" variant="outlined" href="/designer/">
                                    View
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Payment Information</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Legal first name*" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Legal middle name"
                                            hint="example of helper text only on focus">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                            persistent-hint required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Email*" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Password*" type="password" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required>
                                        </v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-autocomplete
                                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                            label="Interests" multiple></v-autocomplete>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                                Close
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../components/Menus/profilebar.vue'

    export default {
        components: {
            profilebar
        },
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Payments',
    })
</script>
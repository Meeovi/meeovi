<template>
    <div class="text-center browseteams">
        <v-dialog v-model="dialog" width="auto">
            <template v-slot:activator="{ props }">
                <v-btn color="primary" variant="flat" prepend-icon="fas fa-users" v-bind="props">
                    Browse Teams
                </v-btn>
            </template>

            <v-card min-height="800" min-width="800">
                <v-row>
                    <v-col cols="6"><v-toolbar title="Browse Teams" color="transparent"></v-toolbar></v-col>
                    <v-col cols="6"><createteam /></v-col>
                </v-row>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Teams ()
                            </th>
                            <th class="text-left">
                                Members
                            </th>
                            <th class="text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Team Name</td>
                            <td>
                                <v-avatar>
                                    <img src="../../assets/images/image2.jpg" alt="John" />
                                </v-avatar>
                            </td>
                            <td>
                                <v-btn variant="outlined">Join</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import createteam from './createteam.vue'

    export default {
        components: { createteam },
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>
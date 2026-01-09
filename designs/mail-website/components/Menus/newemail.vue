<template>
    <v-row>
        <v-dialog v-model="dialog" persistent scrollable min-width="auto">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="composeBtn" prepend-icon="fas fa-plus" variant="text">New Email</v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" prepend-icon="fas fa-trash-can" variant="text"
                                @click="dialog = false">
                                Discard
                            </v-btn>
                            <v-btn color="blue-darken-1" prepend-icon="fas fa-paper-plane" variant="text"
                                @click="dialog = false">
                                Send
                            </v-btn>
                        </v-card-actions>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="To*" hint="Who is receiving this email? Add their email here" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Cc" hint="Add receiptants, they will know of the other users included in this email."></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Bcc" hint="Add receiptants, they won't know of the other users included in this email. Other than who is in CC."></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Subject" hint="It's recommended to add a subject to alert the receiver of the email's content"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <editor />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import editor from '../../components/Editors/editor.vue'

    export default {
        components: {editor},
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>
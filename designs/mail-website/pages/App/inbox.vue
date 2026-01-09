<template>
    <v-card>
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab :value="1">Primary</v-tab>
            <v-tab :value="2">Other</v-tab>
            <v-tab :value="3">Saved Emails</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item :value="1">
                    <primary />
                </v-window-item>

                <v-window-item :value="2">
                    <other />
                </v-window-item>

                <v-window-item :value="3">
                    <saved />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import primary from '../../components/Related/Inbox/primary.vue'
import other from '../../components/Related/Inbox/other.vue'
import saved from '../../components/Related/Inbox/saved.vue'

    export default {
        components: {primary, other, saved},
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi Mail - Inbox',
    })
</script>
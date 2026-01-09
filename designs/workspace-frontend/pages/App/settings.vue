<template>
    <v-card>
        <v-toolbar density="compact" color="info" title="Settings"></v-toolbar>
        <v-tabs v-model="tab" bg-color="info">
            <v-tab :value="1">Profile</v-tab>
            <v-tab :value="2">Notifications</v-tab>
            <v-tab :value="3">Email Forwarding</v-tab>
            <v-tab :value="4">Account</v-tab>
            <v-tab :value="5">Display</v-tab>
            <v-tab :value="6">Apps</v-tab>
            <v-tab :value="7">Hacks</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item :value="1">
                    <profile />
                </v-window-item>

                <v-window-item :value="2">
                    <notifications />
                </v-window-item>

                <v-window-item :value="3">
                    <emailforwarding />
                </v-window-item>

                <v-window-item :value="4">
                    <account />
                </v-window-item>

                <v-window-item :value="5">
                    <display />
                </v-window-item>

                <v-window-item :value="6">
                    <apps />
                </v-window-item>

                <v-window-item :value="7">
                    <hacks />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import profile from '../../components/Related/Settings/profile.vue'
import notifications from '../../components/Related/Settings/notifications.vue'
import emailforwarding from '../../components/Related/Settings/emailforwarding.vue'
import account from '../../components/Related/Settings/account.vue'
import display from '../../components/Related/Settings/display.vue'
import apps from '../../components/Related/Settings/apps.vue'
import hacks from '../../components/Related/Settings/hacks.vue'

    export default {
        components: { profile, notifications, emailforwarding, account, display, apps, hacks  },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Settings'
    })
</script>
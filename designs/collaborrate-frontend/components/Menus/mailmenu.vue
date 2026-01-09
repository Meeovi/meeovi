<template>
    <div class="lowerbar">
        <v-card>
            <v-tabs bg-color="transparent" align-tabs="center">
                <h4>Mail</h4>
                <v-tab><a href="/mail/inbox">Inbox</a></v-tab>
                <v-tab><a href="/mail/drafts">Drafts</a></v-tab>
                <v-tab><a href="/mail/sent">Sent Items</a></v-tab>
                <v-tab><a href="/mail/archive">Archive</a></v-tab>
                <v-tab><a href="/mail/deleted">Deleted Items</a></v-tab>
                <v-tab><a href="/mail/scheduled">Scheduled</a></v-tab>
                <v-tab><a href="/mail/folders">Folders</a></v-tab>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>

</script>
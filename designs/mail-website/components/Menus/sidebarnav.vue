<template>
    <div>
        <v-list density="compact" nav>
          <v-list-item><v-btn title="Inbox" prepend-icon="fas fa-inbox" size="small" variant="text" href="/app/inbox">Inbox</v-btn></v-list-item>
          <v-list-item><v-btn title="Starred" prepend-icon="fas fa-star" size="small" variant="text" href="/app/starred">Starred</v-btn></v-list-item>
          <v-list-item><v-btn title="Sent" prepend-icon="fas fa-paper-plane" size="small" variant="text" href="/app/sent">Sent</v-btn></v-list-item>
          <v-list-item><v-btn title="Drafts" prepend-icon="fas fa-file" size="small" variant="text" href="/app/drafts">Drafts</v-btn></v-list-item>
          <v-list-item><v-btn title="Spam" prepend-icon="fas fa-minus" size="small" variant="text" href="/app/spam">Spam</v-btn></v-list-item>
          <v-list-item><v-btn title="Deleted Items" prepend-icon="fas fa-trash-can" size="small" variant="text" href="/app/deleted">Deleted</v-btn></v-list-item>
          <v-list-item><v-btn title="Archive" prepend-icon="fas fa-box-archive" size="small" variant="text" href="/app/archive">Archived</v-btn></v-list-item>
        </v-list>
    </div>
</template>

<script>
    export default {}
</script>

<script setup>

</script>
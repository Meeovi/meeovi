<template>
    <v-card>
        <v-toolbar color="blue">
            <v-col cols="9">
                <v-toolbar-title>Visits</v-toolbar-title>
            </v-col>
            <v-col cols="3">
                <createSchedule />
            </v-col>
        </v-toolbar>
        <v-tabs bg-color="transparent" align-tabs="center" center-active>
            <v-tab><a href="/visits/">Dashboard</a></v-tab>
            <v-tab><a href="/visits/visits">Visits</a></v-tab>
            <v-tab><a href="/visits/my-visits">My Visits</a></v-tab>
            <v-tab><a href="/visits/approvals">Approvals</a></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {
        
    }
</script>
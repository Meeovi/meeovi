<template>
    <v-card>
        <v-toolbar color="info">
            <v-col cols="9">
                <v-toolbar-title>Scheduler</v-toolbar-title>
            </v-col>
            <v-col cols="3">
                <createSchedule />
            </v-col>
        </v-toolbar>
        <v-tabs bg-color="transparent" align-tabs="center" center-active>
            <v-tab><a href="/scheduler/">Home</a></v-tab>
            <v-tab><a href="/scheduler/my-teams">My Teams</a></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {
        
    }
</script>
<template>
    <v-card>
        <v-toolbar color="purple">
            <v-col cols="9">
                <v-toolbar-title>Checklists</v-toolbar-title>
            </v-col>
            <v-col cols="3">
                
            </v-col>
        </v-toolbar>
        <v-tabs bg-color="transparent" align-tabs="center" center-active>
            <v-tab><a href="/checklists/">Checklists</a></v-tab>
            <v-tab><a href="/checklists/control">Checklist Control</a></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {
        
    }
</script>
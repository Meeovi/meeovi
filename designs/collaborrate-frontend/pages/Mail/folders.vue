<template>
    <div>
        <mailmenu />
        <v-toolbar density="compact" title="Folders"></v-toolbar>
        <v-row>
            <v-col cols="6">

            </v-col>
            <v-divider class="border-opacity-50" color="success" vertical></v-divider>
            <v-col cols="6">

            </v-col>
        </v-row>
    </div>
</template>

<script>
    import mailmenu from '../../components/Menus/mailmenu.vue'

    export default {
        components: {
            mailmenu
        },
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi Mail - Folders'
    })
</script>
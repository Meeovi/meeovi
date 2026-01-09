<template>
    <div>
        <messengermenu />
        <v-row>
            <v-col cols="8"><v-toolbar color="transparent" title="Members"></v-toolbar></v-col>
            <v-col cols="4"><addaddresses /></v-col>
        </v-row>
        <v-row class="memberPage">
            <v-col cols="3">
                <a href="">
                    <v-avatar size="180">
                        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                    </v-avatar>
                    <h6>Member name</h6>
                </a>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import messengermenu from '../../components/Menus/messengermenu.vue'
    import addaddresses from '../../components/Content/customers/add-addresses.vue'

    export default {
        components: {
            messengermenu,
            addaddresses
        },
    }
</script>

<script setup>
    useHead({
        title: 'Members'
    })
</script>
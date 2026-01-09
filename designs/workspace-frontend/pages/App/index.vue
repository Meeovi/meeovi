<template>
    <div class="homeSection">
        <latest />
        <v-row class="homeRow">
            <v-col cols="6"><contentone /></v-col>
            <v-col cols="6"><contenttwo /></v-col>
            <v-col cols="12"><people /></v-col>
        </v-row>
    </div>
</template>

<script>
import latest from '../../components/homePage/latest.vue'
import contentone from '../../components/homePage/contentone.vue'
import contenttwo from '../../components/homePage/contenttwo.vue'
import people from '../../components/homePage/people.vue'

    export default {
        components: { latest, contentone, contenttwo, people },
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi Workspace',
    })
</script>
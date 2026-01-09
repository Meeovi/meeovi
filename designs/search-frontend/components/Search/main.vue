<template>
    <div>
        <v-row>
            <v-col cols="6">
                <mainLeft />
            </v-col>

            <v-col cols="6">
                <mainRight />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import mainLeft from './mainLeft.vue'
    import mainRight from './mainRight.vue'

    export default {
        components: {
            mainLeft,
            mainRight
        }
    }
</script>

<script setup>
    useHead({
        title: 'All Search',
    })
</script>
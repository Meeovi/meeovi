<template>
    <div class="noteCreator">
        <v-row>
            <v-col cols="10">
                <h3>Create A Article</h3>
            </v-col>
            <v-col cols="2">
                <v-btn color="deep-orange-darken-4">POST</v-btn>
            </v-col>
            <v-col cols="12">
                <v-text-field label="Note Name"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field label="Subject"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-select label="Select" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                </v-select>
            </v-col>
            <v-col cols="12">
                <v-textarea label="Excerpt"></v-textarea>
            </v-col>
            <v-col cols="12">
                <editor />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import editor from '../../../components/Editors/editor.vue'

    export default {
        components: {
            editor
        }
    }
</script>

<script setup>
    useHead({
        title: 'Create A Note',
    })
</script>
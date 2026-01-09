<template>
    <div>
      <v-row>
        <v-col cols="12">
            <v-text-field title="Name" label="Name"></v-text-field>
        </v-col>

        <v-col cols="12">
            <v-textarea title="Description" label="Description"></v-textarea>
        </v-col>

        <v-col cols="12">
            <v-file-input title="Upload File" label="Upload File"></v-file-input>
        </v-col>
      </v-row>
    </div>
</template>

<script>

    export default {

    }
</script>

<script setup>
    useHead({
        title: 'Create',
    })
</script>
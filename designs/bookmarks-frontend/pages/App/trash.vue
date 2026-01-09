<template>
    <div>
        <v-toolbar class="pagetoolbar" color="transparent" density="compact" elevation="1">
            <v-btn prepend-icon="fas fa-home" variant="text">Deleted Items</v-btn>

            <v-spacer></v-spacer>

            <addfile />
        </v-toolbar>
        
        <v-table class="contentSection">
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Last Modified
                    </th>
                    <th class="text-left">
                        Size
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td></td>
                    <td></td>
                    <td><v-btn icon="fas fa-share" title="Share" variant="text"></v-btn></td>
                    <td><v-btn icon="fas fa-star" title="Save as Favorite" variant="text"></v-btn></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import addfile from '../../components/Content/drive/Add/add-file.vue'

    export default {
        components: { addfile },
    }
</script>

<script setup>
    useHead({
        title: 'Recycle Bin'
    })
</script>
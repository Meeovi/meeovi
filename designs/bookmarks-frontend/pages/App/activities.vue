<template>
    <div>
        <v-toolbar class="pagetoolbar" color="transparent" density="compact" elevation="1">
            <v-btn prepend-icon="fas fa-clock-rotate-left" variant="text">Activities</v-btn>

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
                        Last Modified By
                    </th>
                    <th class="text-left">
                        Last Modified
                    </th>
                    <th class="text-left">
                        Link
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href=""></a></td>
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
        title: 'Activites'
    })
</script>
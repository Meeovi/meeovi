<template>
    <div>
        <v-toolbar class="pagetoolbar" color="transparent" density="compact" elevation="1">
            <v-btn prepend-icon="fas fa-clock-rotate-left" variant="text">Tasks</v-btn>

            <v-spacer></v-spacer>

            <addfile />
        </v-toolbar>
        
        <v-table class="contentSection">
            <thead>
                <tr>
                    <th class="text-left">
                        Requested By
                    </th>
                    <th class="text-left">
                        Requested Type
                    </th>
                    <th class="text-left">
                        Comments
                    </th>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-left">
                        Requested Date
                    </th>
                    <th class="text-left">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
        title: 'Tasks'
    })
</script>
<template>
    <div>
        <v-toolbar style="background-color: green; color: white;">
            <v-toolbar-title>Course Homework</v-toolbar-title>
        </v-toolbar>
        <coursemenu />
        <v-table fixed-header height="100vh">
            <thead>
                <tr>
                    <th class="text-left">
                        WHID
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-left">
                        Region
                    </th>
                    <th class="text-left">
                        Sub Region
                    </th>
                    <th class="text-left">
                        Country
                    </th>
                    <th class="text-left">
                        Site Type
                    </th>
                    <th class="text-left">
                        Parent FC
                    </th>
                    <th class="text-left">
                        Site Leader
                    </th>
                    <th class="text-left">
                        Regional IT Manager
                    </th>
                    <th class="text-left">
                        IT Manager
                    </th>
                    <th class="text-left">
                        IT Super Users
                    </th>
                    <th class="text-left">
                        Last Baseline
                    </th>
                    <th class="text-left">
                        Infra Type
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td><a href="/">{{ item.name }}</a></td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.calories }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import coursemenu from '../../components/Menus/coursemenu.vue'

    export default {
        components: {
            coursemenu
        },
        data() {
            return {

            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Course Homework'
    })
</script>
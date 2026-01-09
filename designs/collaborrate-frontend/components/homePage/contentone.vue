<template>
    <div>
        <v-row>
            <v-col>
                <v-toolbar color="primary">
                    <v-btn title="View Profile">
                        <v-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                        </v-avatar>
                    </v-btn>

                    <v-toolbar-title>My Tasks</v-toolbar-title>

                    <v-spacer></v-spacer>
                </v-toolbar>

                <v-card>
                    <v-tabs v-model="tab" bg-color="primary">
                        <v-tab value="one">Upcoming</v-tab>
                        <v-tab value="two">Overdue ()</v-tab>
                        <v-tab value="three">Completed</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                <v-table theme="dark">
                                    <thead>
                                        <tr>
                                            <th class="text-left">
                                                Name
                                            </th>
                                            <th class="text-left">
                                                Due Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in desserts" :key="item.name">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.calories }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-window-item>

                            <v-window-item value="two">
                                <v-table theme="dark">
                                    <thead>
                                        <tr>
                                            <th class="text-left">
                                                Name
                                            </th>
                                            <th class="text-left">
                                                Due Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in desserts" :key="item.name">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.calories }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-window-item>

                            <v-window-item value="three">
                                <v-table theme="dark">
                                    <thead>
                                        <tr>
                                            <th class="text-left">
                                                Name
                                            </th>
                                            <th class="text-left">
                                                Due Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in desserts" :key="item.name">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.calories }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tab: null,
            }
        },
    }
</script>

<script setup>

</script>
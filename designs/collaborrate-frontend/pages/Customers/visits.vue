<template>
    <div>
        <customersmenu />
        <v-row>
            <v-col cols="8"><v-toolbar color="transparent" title="Visits"></v-toolbar></v-col>
            <v-col cols="4"><addvisits /></v-col>
        </v-row>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Calories
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

    </div>
</template>

<script>
    import customersmenu from '../../components/Menus/customersmenu.vue'
    import addvisits from '../../components/Content/customers/add-visits.vue'

    export default {
        components: {
            customersmenu,
            addvisits
        },
    }
</script>

<script setup>
    useHead({
        title: 'Visits'
    })
</script>
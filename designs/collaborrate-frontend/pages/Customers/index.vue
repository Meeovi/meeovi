<template>
    <div>
        <customersmenu />
        <v-row>
            <v-col cols="8"><v-toolbar color="transparent" title="Customers"></v-toolbar></v-col>
            <v-col cols="4"><addcustomers /></v-col>
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
    import addcustomers from '../../components/Content/customers/add-customers.vue'

    export default {
        components: {
            customersmenu,
            addcustomers
        },
    }
</script>

<script setup>
    useHead({
        title: 'Customers'
    })
</script>
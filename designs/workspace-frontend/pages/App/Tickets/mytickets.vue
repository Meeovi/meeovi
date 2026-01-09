<template>
    <div>
        <v-table fixed-header height="300px">
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
//import ticketsmenu from '../../../components/Menus/ticketsmenu.vue'

export default {
    components: { 
        //ticketsmenu
     },
}
</script>

<script setup>
    useHead({
        title: 'My Tickets'
    })
</script>
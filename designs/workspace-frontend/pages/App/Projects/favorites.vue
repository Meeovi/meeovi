<template>
    <div>
        <projectsmenu />
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
    import projectsmenu from '../../../components/Menus/projectsmenu.vue'

export default {
    components: { projectsmenu },
}
</script>
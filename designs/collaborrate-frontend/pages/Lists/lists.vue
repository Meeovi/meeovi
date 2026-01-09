<template>
    <div>
        <listsmenu />

        
    </div>
</template>

<script>
import listsmenu from '../../components/Menus/listsmenu.vue'

export default {
    components: { listsmenu },
}
</script>

<script setup>
    useHead({
        title: 'Meeovi ToDo'
    })
</script>
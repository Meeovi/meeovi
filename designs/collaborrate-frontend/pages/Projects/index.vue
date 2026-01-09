<template>
    <div>
        <projectsmenu />

        
    </div>
</template>

<script>
import projectsmenu from '../../components/Menus/projectsmenu.vue'

export default {
    components: { projectsmenu },
}
</script>

<script setup>
    useHead({
        title: 'Projects'
    })
</script>
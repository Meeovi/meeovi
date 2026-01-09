<template>
    <div>
        <ticketsmenu />

        
    </div>
</template>

<script>
import ticketsmenu from '../../components/Menus/ticketsmenu.vue'

export default {
    components: { ticketsmenu },
}
</script>

<script setup>
    useHead({
        title: ''
    })
</script>
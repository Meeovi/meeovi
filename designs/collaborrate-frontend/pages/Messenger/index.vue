<template>
    <div>
        <messengermenu />

        
    </div>
</template>

<script>
import messengermenu from '../../components/Menus/messengermenu.vue'

export default {
    components: { messengermenu },
}
</script>

<script setup>
    useHead({
        title: 'Meeovi Messenger'
    })
</script>
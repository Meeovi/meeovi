<template>
    <div>
      
    </div>
</template>

<script>
    import preferences from '~/components/user/preferences.vue'

    export default {
        components: {
            preferences,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Account',
    })
</script>

<style scoped>

</style>
<template>
    <div>
       
    </div>
</template>

<script>
    import overview from '~/components/settings/overview'
    import auth from '~/components/settings/auth'

    export default {
        components: {
            overview,
            auth
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Settings',
    })
</script>

<style scoped>

</style>
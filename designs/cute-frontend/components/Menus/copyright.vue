<template>
    <div>
        {{ new Date().getFullYear() }} — <strong>{{ copyrightBlock?.description }}<NuxtLink :href="copyrightBlock?.content[0]?.url">&nbsp; {{ copyrightBlock?.content[0]?.name }}</NuxtLink></strong>
    </div>
</template>

<script setup>

  const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: copyrightBlock
    } = await useAsyncData('copyrightBlock', () => {
        return $directus.request($readItem('blocks', '3', {
            fields: ['*', 'media.*.*'],
            filter: {
                website: {
                    website_id: {
                        name: {
                            _eq: 'ShopnCute'
                        }
                    }
                }
            }
        }))
    })
</script>
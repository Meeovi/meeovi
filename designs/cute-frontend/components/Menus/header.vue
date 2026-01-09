<template>
    <div>
        <NuxtLink class="logobrand" href="/">
          <v-avatar variant="text" color="pink" start :image="`${$directus.url}assets/${headerBlock?.image?.filename_disk}`"></v-avatar> {{ headerBlock?.name }}
        </NuxtLink>
    </div>
</template>

<script setup>
  const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: headerBlock
    } = await useAsyncData('headerBlock', () => {
        return $directus.request($readItem('blocks', '2', {
            fields: ['*', 'image.*.*'],
            filter: {
                website: {
                    website_id: {
                        name: {
                            _eq: "ShopnCute"
                        }
                    }
                }
            }
        }))
    })
</script>
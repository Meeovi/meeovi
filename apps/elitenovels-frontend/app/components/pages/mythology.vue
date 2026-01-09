<template>
  <div class="categoryPage">
    <v-row style="background-color: lightgreen;">
      <v-col cols="12">
        <v-toolbar title="Popular Myths" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="popular in popularMyths" :key="popular">
              <template #default="{ toggle }">
                <characters :character="popular" class="characterCard" @click="toggle"
                  :class="['ma-4', selectedClass]" />
              </template>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-toolbar title="Royal Circa" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
              <v-slide-group-item v-for="royal in royalcirca" :key="royal">
                <template #default="{ toggle, selectedClass }">
                  <characters :character="royal" class="characterCard" @click="toggle"
                    :class="['ma-4', selectedClass]" />
                </template>
              </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="BROWSE ELITEVERSE MYTHOLOGY" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="mythology in mythology" :key="mythology">
        <characters :character="mythology" class="characterCard" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import characters from '~/components/related/character.vue'

  const model = ref(null);

  const {
    $directus,
    $readItems,
    $readItem
  } = useNuxtApp()

  const {
    data: popularMyths
  } = await useAsyncData('popularMyths', () => {
    return $directus.request($readItems('characters', {
      fields: ['*', {
        '*': ['*']
      }],
      filter: {
        type: {
          _eq: "Mythology"
        }
      }
    }))
  })

  const {
    data: royalcirca
  } = await useAsyncData('royalcirca', () => {
    return $directus.request($readItems('characters', {
      filter: {
        tags: {
          tags_id: {
            name: {
              _eq: "Royal Circa"
            }
          }
        }
      }
    }))
  })

  const {
    data: mythology
  } = await useAsyncData('mythology', () => {
    return $directus.request($readItems('characters', {
      fields: ['*', {
        '*': ['*']
      }],
      filter: {
        categories: {
          categories_id: {
            name: {
              _eq: "Mythology"
            }
          }
        }
      }
    }))
  })

  useHead({
    title: 'Mythology',
  })
</script>
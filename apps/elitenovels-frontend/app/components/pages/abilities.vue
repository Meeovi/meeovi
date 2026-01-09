<template>
  <div class="categoryPage">
    <v-toolbar title="Abilities" style="background-color: blue; color: white !important;"></v-toolbar>
    <v-row style="background-color: blue;">
      <v-col cols="12">
        <h4 style="color: white !important;">Popular Abilities</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="abilities in ability" :key="abilities">
              <template #default="{ toggle }">
                <Ability :facet="abilities" :class="['ma-4', selectedClass]" @click="toggle" />
              </template>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="abilities in characterAbility" :key="abilities">
        <Ability :facet="abilities" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import Ability from '~/components/related/facet.vue'

  const model = ref(null);

  const {
    $directus,
    $readItems
  } = useNuxtApp()

  const {
    data: ability
  } = await useAsyncData('ability', () => {
    return $directus.request($readItems('abilities', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  const {
    data: characterAbility
  } = await useAsyncData('characterAbility', () => {
    return $directus.request($readItems('options', {
      fields: ['*', {
        '*': ['*']
      }],
      filter: {
        category: {
          categories_id: {
            name: {
              _eq: 'Abilities'
            }
          }
        }
      }
    }))
  })

  useHead({
    title: 'Abilities',
  })
</script>
<template>
  <div>
    <v-col cols="12">
      <v-toolbar title="CHARACTERS WITHIN THE ELITEVERSE" density="comfortable" color="transparent" />
      <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="(char, index) in characters" :key="char?.id || index">
            <template #default="{ toggle, selectedClass }">
              <div>
                <character :character="char" class="characterCard" @click="toggle" :class="['ma-4', selectedClass]" />
              </div>
            </template>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import character from '~/components/related/character.vue'

const model = ref(null)
const { $directus, $readItems } = useNuxtApp()

const { data: characters } = await useAsyncData('characters', () => {
  return $directus.request($readItems('characters'))
})
</script>
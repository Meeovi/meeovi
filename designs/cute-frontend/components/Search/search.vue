<template>
    <v-row justify="space-around">
        <v-col cols="auto">
            <v-dialog transition="dialog-top-transition">
                <template v-slot:activator="{ props }">
                    <v-btn variant="text" size="x-small" v-bind="props" icon="fas fa-search"></v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-toolbar color="red-lighten-2" title="Search the Store"></v-toolbar>
                        <v-card-text>
                            <div class="searchField">
                                <ais-instant-search class="mainSearch" :index-name="indexName"
                                    :search-client="searchClient">
                                    <ais-search-box placeholder="Search Meeovi" :queryHook="queryHook"
                                        @submit="submitSearch" />
                                </ais-instant-search>
                                <!--                <form role="search" class="hidden md:flex flex-[100%] mt-2 md:mt-0 md:ml-10 pb-2 md:pb-0"
                    @submit.prevent="search">
                    <SfInput v-model="inputValue" type="search"
                        class="[&::-webkit-search-cancel-button]:appearance-none" placeholder="Search"
                        wrapper-class="flex-1 h-10 pr-0" size="base">
                        <template #suffix>
                            <span class="flex items-center">
                                <SfButton variant="tertiary" square aria-label="search" type="submit"
                                    class="rounded-l-none hover:bg-transparent active:bg-transparent">
                                    <SfIconSearch />
                                </SfButton>
                            </span>
                        </template>
                    </SfInput>
                </form>-->
                            </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { useRuntimeConfig } from '#imports';
import 'dotenv'

const config = useRuntimeConfig();

// Use environment variables for Algolia credentials
const searchClient = algoliasearch(
    config.public.algolia.apiKey,
    config.public.algolia.applicationId
);

const searchQuery = ref('');
const router = useRouter();
const indexName = config.public.algolia.globalIndex;

// Query hook to capture the input query
const queryHook = (query, refine) => {
  searchQuery.value = query;
  refine(query);
};

// Function to submit search on "Enter"
const submitSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/results',
      query: { q: searchQuery.value.trim() }
    });
  }
};
</script>
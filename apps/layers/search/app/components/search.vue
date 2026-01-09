<template>
  <div class="searchField">
    <div class="container">
      <ais-instant-search :search-client="searchClient" :index-name="indexName">
        <ais-configure :hits-per-page.camel="8" />
        <div class="search-panel">
          <div class="search-panel__filters">
            <ais-panel>
              <template v-slot:header>type</template>
              <ais-refinement-list attribute="type" />
            </ais-panel>

            <ais-panel>
              <template v-slot:header>actors</template>
              <ais-refinement-list searchable attribute="actors" />
            </ais-panel>
          </div>

          <div class="search-panel__results">
            <div class="searchbox">
              <ais-search-box placeholder="" />
            </div>
            <ais-hits>
              <template v-slot:item="{ item, index }">
                <article @click="openResult(item)" style="cursor:pointer">
                  <h1>
                    <ais-highlight attribute="title" :hit="item" />
                  </h1>
                  <p>
                    <ais-snippet :hit="item" attribute="plot" />
                  </p>
                </article>
              </template>
            </ais-hits>

            <div class="pagination">
              <ais-pagination />
            </div>
          </div>
        </div>
      </ais-instant-search>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    useRouter
  } from 'vue-router'

  import {
    type Ref,
    ref,
    watch
  } from 'vue';
  import Client from '@searchkit/instantsearch-client'
  import Searchkit from "searchkit"
  import { useRuntimeConfig } from 'nuxt/app'

  const configDetails = useRuntimeConfig()

  const router = useRouter()
  const searchQuery = ref('');
  const indexName = configDetails.public.indexName;

  // Read search connection values from runtime config for security.
  // Set these in `nuxt.config.ts` runtimeConfig.public.search: { host, apiKey }
  const searchHost = configDetails.public.search?.host;
  const searchApiKey = configDetails.public.search?.apiKey;

  if (!searchHost || !searchApiKey) {
    // warn in dev if runtime config not set
    // eslint-disable-next-line no-console
    console.warn('Missing runtimeConfig.public.search host or apiKey');
  }

  const config = {
    connection: {
      host: searchHost || 'https://commerce-demo.es.us-east4.gcp.elastic-cloud.com:9243',
      apiKey: searchApiKey || ''
    },
    search_settings: {
      highlight_attributes: ['title'],
      search_attributes: [{
        field: 'title',
        weight: 3
      }, 'actors', 'plot'],
      result_attributes: ['*'],
      facet_attributes: [
        'type',
        {
          attribute: 'actors',
          field: 'actors.keyword',
          type: 'string'
        }
      ],
      sorting: {
        default: {
          field: '_score',
          order: 'desc'
        },
        _rated_desc: {
          field: 'rated',
          order: 'desc'
        }
      },
      snippet_attributes: ['*'],
      query_rules: []
    }
  }

  const searchkitClient = new Searchkit(config as any)
  const searchClient = Client(searchkitClient);

  function openResult(item: any) {
    const id = item._id ?? item.id ?? '';
    const title = item.title ?? '';
    router.push({
      path: '/results',
      query: {
        id,
        title
      }
    });
  }

</script>

<template>
  <div class="notifications-page" style="width: 100%;">
    <section data-bs-version="5.1" class="info1 cid-v5A0K07pfT" id="info1-bd" data-sortbtn="btn-primary">
      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(68, 121, 217);"></div>
      <div class="align-center container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <h3 class="mbr-section-title mb-4 mbr-fonts-style display-1">
              <strong> {{ notifyPage?.name }}</strong>
            </h3>
            <p class="mbr-section-title mb-4 mbr-fonts-style display-7" v-dompurify-html="notifyPage?.content"></p>
          </div>
        </div>
      </div>
    </section>

    <v-card variant="text">
      <v-toolbar :style="`background-color: ${notifyBar?.color}; color: ${notifyBar?.colortext} !important`">
        <v-tabs v-model="tab" align-tabs="center">
          <div v-for="(menu, index) in notifyBar?.menus" :key="index">
            <v-tab :value="menu?.value">
              <v-btn variant="text" :style="`color: ${notifyBar?.colortext} !important`">{{ menu?.name }}</v-btn>
            </v-tab>
          </div>
        </v-tabs>
      </v-toolbar>
    </v-card>

      <v-tabs-window v-model="tab">
      <v-tabs-window-item value="one">
        <v-sheet>
          <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :items="serverItems"
            :items-length="totalItems" :loading="loading" :search="search" item-value="id"
            no-data-text="No notifications" items-per-page-text="Items per page" page-text="{0}-{1} of {2}"
            :footer-props="{ itemsPerPageAllText: 'All', itemsPerPageText: 'Items per page', pageText: '{0}-{1} of {2}', noDataText: 'No notifications' }"
            @update:options="loadItems">
            <template v-slot:tfoot>
              <tr>
                <td>
                  <v-text-field v-model="search" class="ma-2" density="compact" placeholder="Search Notifications"
                    hide-details></v-text-field>
                </td>
              </tr>
            </template>
          </v-data-table-server>
        </v-sheet>
      </v-tabs-window-item>
      <v-tabs-window-item value="two">
        <v-sheet class="pa-5" color="orange">Two</v-sheet>
      </v-tabs-window-item>
      <v-tabs-window-item value="three">
        <v-sheet class="pa-5" color="brown">Three</v-sheet>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
  import {
    ref,
    computed,
    onMounted,
    watch
  } from 'vue'
  // `useUserSession` replaced by BetterAuth `useAuth()` in server-side composable
  import useNotificationsServer from '~/composables/globals/useNotificationsServer'

  const loading = ref(false)

  const {
    $directus,
    $readNotifications,
    $readItem
  } = useNuxtApp()
  const route = useRoute()
  const tab = ref(null)

  const userSession = useUserSession()

  const name = ref('')

  const {
    data: notifyBar
  } = await useAsyncData('notifyBar', async () => {
    const resp = await $directus.request($readItem('navigation', '93', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
    return resp?.data ?? resp ?? null
  })

  const {
    data: notifyPage
  } = await useAsyncData('notifyPage', () => {
    return $directus.request($readItem('pages', '95', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  // Use composable which implements server-side loading and search
  const { serverItems, totalItems, loading: loadingRef, itemsPerPage: itemsPerPageRef, search: searchRef, headers: headersRef, loadItems } = useNotificationsServer()

  // Keep local refs in sync with composable
  const itemsPerPage = itemsPerPageRef
  const search = searchRef
  const headers = headersRef

  // call initial load on mount
  onMounted(() => {
    loadItems({ page: 1, itemsPerPage: itemsPerPage.value })
    // Fix for Vuetify placeholder translations not being applied inside 3rd-party table wrapper
    const replacements = {
      '$vuetify.dataFooter.itemsPerPageAll': 'All',
      '$vuetify.dataFooter.itemsPerPageText': 'Items per page',
      '$vuetify.dataFooter.pageText': '{0}-{1} of {2}',
      '$vuetify.noDataText': 'No data'
    }

    function replacePlaceholders(root = document) {
      const walker = document.createTreeWalker(
        root instanceof Document ? root.body : root,
        NodeFilter.SHOW_TEXT,
        null,
        false
      )
      let node = null
      while ((node = walker.nextNode())) {
        const txt = node.nodeValue || ''
        if (txt.includes('$vuetify')) {
          let newTxt = txt
          for (const k in replacements) {
            newTxt = newTxt.split(k).join(replacements[k])
          }
          if (newTxt !== txt) node.nodeValue = newTxt
        }
      }
    }

    // Run once and observe for future changes (e.g., menu open)
    replacePlaceholders()
    const observer = new MutationObserver(() => replacePlaceholders())
    observer.observe(document, { childList: true, subtree: true, characterData: true })
    // disconnect after 30s to avoid long-lived observers
    setTimeout(() => observer.disconnect(), 30 * 1000)
  })

  // reload when search or itemsPerPage change
  watch(search, () => {
    loadItems({ page: 1, itemsPerPage: itemsPerPage.value })
  })
  watch(itemsPerPage, () => {
    loadItems({ page: 1, itemsPerPage: itemsPerPage.value })
  })
</script>
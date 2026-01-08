<template>
  <div>
    <section data-bs-version="5.1" class="people5 cid-uHg5WZJiwK" id="people5-au">
      <div class="container-fluid">
        <div class="row justify-content-between">
          <div class="col-12 col-lg-12">
            <div>
              <div class="shadow">
                <img v-if="!user?.image" :src="user?.image" :alt="user?.name" class="align">
                <img v-else src="/images/team1.jpg" :alt="user?.name" class="align">
                <h5 class="card-title mbr-fonts-style display-2">
                  <strong>{{ user?.name }}</strong>
                </h5>
                <h5 class="card-subtitle mbr-fonts-style display-4">
                  {{ user?.profession }}</h5>
                <NuxtLink v-if="user?.isSeller" :to="`/spaces/${user?.spaces?.space_id?.slug}`"
                  class="card-text mbr-fonts-style display-4"></NuxtLink>
                <p class="card-text mbr-fonts-style display-4" v-dompurify-html="user?.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <v-sheet>
      <v-tabs color="primary" center-active>
        <v-tab value="one">Feed</v-tab>
        <v-tab value="two">Vibez</v-tab>
        <v-tab value="three" v-if="user?.isSeller">Shop</v-tab>
        <v-tab value="four">Links</v-tab>
      </v-tabs>

      <v-divider></v-divider>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <v-sheet class="pa-5" color="purple">One</v-sheet>
        </v-tabs-window-item>
        <v-tabs-window-item value="two">
          <v-sheet class="pa-5" color="orange">Two</v-sheet>
        </v-tabs-window-item>
        <v-tabs-window-item value="three">
          <v-sheet class="pa-5" color="brown">Three</v-sheet>
        </v-tabs-window-item>
        <v-tabs-window-item value="four">
          <v-sheet class="pa-5" color="green">Four</v-sheet>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
  
  const route = useRoute();
  const tab = ref(null);
  const {
    user,
    session,
    client
  } = useAuth()
  const toast = useToast()
  const {
    t
  } = useI18n()
  const localePath = useLocalePath()
  const {
    data: accounts
  } = await useAsyncData<{ data: { provider: string }[] }>('/accounts', () => client.listAccounts())

  function hasProvider(provider: string) {
    return accounts.value?.data?.some((account: { provider: string }) => account.provider === provider)
  }

  const error = useRoute().query?.error
  onMounted(() => {
    if (error) {
      toast.add({
        color: 'error',
        title: `${error}`
      })
    }
  })

  useHead({
    title: user?.value?.username || 'User Profile',
  })

</script>

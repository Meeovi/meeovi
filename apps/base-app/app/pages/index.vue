<template>
  <div>
    <headerslider />
    <hellobar />
    <div>
      <ataglance />
      <exclusives />
      <bookcallout />
      <deals />
      <musiccallout />
      <latestproducts />
      <theatercallout />
      <featuredproducts />
      <relatedspaces />
      <bestsellers />
      <pixanomycallout />
      <recentlyViewed />
      <relatedstations />
      <relatedbrands />
      <blogcallout /> <!-- -->
    </div>
  </div>
</template>

<script setup>
  import headerslider from '~/components/pages/homepage/headerslider.vue'
  //import intro from '~/components/pages/homepage/intro.vue'
  import pixanomycallout from '~/components/pages/homepage/pixanomycallout.vue'
  import hellobar from '~/components/menus/hellobar.vue'
  import bookcallout from '~/components/pages/homepage/bookcallout.vue'
  import musiccallout from '~/components/pages/homepage/musiccallout.vue'
  import latestproducts from '#commerce/app/components/catalog/product/latestproducts.vue'
  import relatedstations from '#commerce/app/components/catalog/product/relatedstations.vue'
  import theatercallout from '~/components/pages/homepage/theatercallout.vue'
  import featuredproducts from '#commerce/app/components/catalog/product/featuredproducts.vue'
  import ataglance from '~/components/pages/homepage/ataglance.vue'
  import relatedspaces from '#social/app/components/related/relatedspaces.vue'
  import bestsellers from '#commerce/app/components/catalog/product/bestsellers.vue'
  import exclusives from '#commerce/app/components/catalog/product/exclusives.vue'
  import deals from '#commerce/app/components/catalog/product/deals.vue'
  import recentlyViewed from '#commerce/app/components/catalog/product/recentlyviewed.vue'
  import relatedbrands from '#commerce/app/components/catalog/product/relatedbrands.vue'
  //import relatedcreators from '#social/components/related/relatedcreators.vue'
  //import yardsale from '~/components/pages/homepage/yardsale.vue'
  import blogcallout from '~/components/pages/homepage/blogcallout.vue'

  useHead({
    title: 'Meeovi',
  })
</script>
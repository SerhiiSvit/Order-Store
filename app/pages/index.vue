<script setup lang="ts">
import HomeHero from '~/components/home/HomeHero.vue'
import HomeMetric from '~/components/home/HomeMetric.vue'
import HomePopularCategories from '~/components/home/HomePopularCategories.vue'
import HomePopularRestaurants from '~/components/home/HomePopularRestaurants.vue'
import HomeExlusiveDeals from '~/components/home/HomeExlusiveDeals.vue'
import HomeAppStore from '~/components/home/HomeAppStore.vue'
import HomeKnowAboutUs from '~/components/home/HomeKnowAboutUs.vue'

useSeoMeta({
  title: 'Order Store',
  description: 'Nuxt 4 starter for Order Store with layered architecture.'
})
</script>

<template>
  <div class="page-shell w-full space-y-14">
    <HomeHero />
    <HomeExlusiveDeals />
    <HomePopularCategories />
    <HomePopularRestaurants />
    <HomeAppStore />
    <HomeKnowAboutUs />
    <HomeMetric />
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/styles/pages/home/index';
</style>

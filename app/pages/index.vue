<script setup lang="ts">
import HomeFaq from '~/components/home/HomeFaq.vue'
import HomeHero from '~/components/home/HomeHero.vue'
import HomeMetric from '~/components/home/HomeMetric.vue'
import HomePopularCategories from '~/components/home/HomePopularCategories.vue'
import HomePopularRestaurants from '~/components/home/HomePopularRestaurants.vue'

useSeoMeta({
  title: 'Order Store',
  description: 'Nuxt 4 starter for Order Store with layered architecture.'
})
</script>

<template>
  <div class="w-full">
    <HomeHero />
    <HomePopularCategories />
    <HomePopularRestaurants />
    <HomeMetric />
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/styles/pages/home/index';
</style>

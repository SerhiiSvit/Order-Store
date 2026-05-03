<script setup lang="ts">
import HomeFaq from '~/components/home/HomeFaq.vue'
import HomeHero from '~/components/home/HomeHero.vue'

useSeoMeta({
  title: 'Order Store',
  description: 'Nuxt 4 starter for Order Store with layered architecture.'
})
</script>

<template>
  <div class="w-full">
    <HomeHero />
    <!-- <HomeFaq /> -->
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/styles/pages/home/index';
</style>

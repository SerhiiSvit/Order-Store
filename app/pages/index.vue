<script setup lang="ts">
import HomeFaq from '~/components/home/HomeFaq.vue'
import HomeHero from '~/components/home/HomeHero.vue'

useSeoMeta({
  title: 'Brewly Store',
  description: 'Nuxt 4 starter for Brewly Store with layered architecture.'
})
</script>

<template>
  <div class="home-page space-y-14">
    <HomeHero />
    <HomeFaq />
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/styles/pages/home/index';
</style>

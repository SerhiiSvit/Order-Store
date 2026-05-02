<script setup lang="ts">
import AppFooter from '~/components/footer/AppFooter.vue'
import AppHeader from '~/components/header/AppHeader.vue'
</script>

<template>
  <div class="layout-shell flex min-h-screen flex-col">
    <AppHeader />

    <main class="mx-auto max-w-6xl flex-grow px-4 py-10">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

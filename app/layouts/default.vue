<script setup lang="ts">
import AppFooter from '~/components/footer/AppFooter.vue'
import AppHeader from '~/components/header/AppHeader.vue'
</script>

<template>
  <div class="layout-shell flex min-h-screen flex-col">
    <AppHeader />

    <main class="flex-grow py-10">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

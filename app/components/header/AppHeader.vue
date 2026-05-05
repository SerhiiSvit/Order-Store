<script setup lang="ts">
import AppHeaderLinks from './AppHeaderLinks.vue'
import AppHeaderPromo from './AppHeaderPromo.vue'
</script>

<template>
  <header
    class="header bg-bg-base/90 sticky top-0 z-header border-b border-ui-border backdrop-blur"
  >
    <AppHeaderPromo />

    <AppHeaderLinks />
  </header>
</template>

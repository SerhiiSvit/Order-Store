<script setup lang="ts">
defineProps<{
  overline?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <header class="ui-section-title space-y-3">
    <p
      v-if="overline"
      class="ui-section-title__overline text-xs uppercase tracking-[0.22em] text-brand-primary"
    >
      {{ overline }}
    </p>
    <h2 class="ui-section-title__title font-semibold text-3xl tracking-tight text-text-primary">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="ui-section-title__subtitle max-w-2xl text-text-muted">
      {{ subtitle }}
    </p>
  </header>
</template>

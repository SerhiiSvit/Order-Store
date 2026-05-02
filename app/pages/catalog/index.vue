<script setup lang="ts">
import UiCard from '~/components/ui/UiCard.vue'
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'

useSeoMeta({
  title: 'Catalog | Brewly Store',
  description: 'Project architecture, workflow rules, and stack overview for Brewly Store.'
})
</script>

<template>
  <div class="catalog-page catalog-content space-y-12">
    <section class="catalog-page__hero space-y-5">
      <UiSectionTitle :title="$t('catalog.title')" :subtitle="$t('catalog.description')" />
    </section>
  </div>
</template>

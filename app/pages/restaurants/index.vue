<script setup lang="ts">
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'

useSeoMeta({
  title: 'Restaurants | Order Store',
  description: 'Browse restaurants available in Order Store.'
})
</script>

<template>
  <div class="restaurants-page restaurants-content space-y-12">
    <section
      class="restaurants-page__hero space-y-5 rounded-2xl border border-ui-border bg-surface p-6 shadow-sm md:p-8"
    >
      <UiSectionTitle :title="$t('restaurants.title')" :subtitle="$t('restaurants.description')" />

      <p class="max-w-2xl text-md text-text-secondary">
        {{ $t('restaurants.placeholder') }}
      </p>
    </section>
  </div>
</template>

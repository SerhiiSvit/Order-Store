<script setup lang="ts">
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'

useSeoMeta({
  title: 'Cart | Brewly Store',
  description: 'Project architecture, workflow rules, and stack overview for Brewly Store.'
})
</script>

<template>
  <div class="page-shell cart-page cart-content space-y-12">
    <section class="cart-page__hero space-y-5">
      <UiSectionTitle :title="$t('cart.title')" :subtitle="$t('cart.description')" />
    </section>
  </div>
</template>

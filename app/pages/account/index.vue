<script setup lang="ts">
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'

useSeoMeta({
  title: 'Account | Brewly Store',
  description: 'Project architecture, workflow rules, and stack overview for Brewly Store.'
})
</script>

<template>
  <div class="account-page account-content space-y-12">
    <section class="account-page__hero space-y-5">
      <UiSectionTitle :title="$t('account.title')" :subtitle="$t('account.description')" />
    </section>
  </div>
</template>

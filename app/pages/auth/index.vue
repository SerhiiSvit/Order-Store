<script setup lang="ts">
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'

useSeoMeta({
  title: 'Auth | Brewly Store',
  description: 'Project architecture, workflow rules, and stack overview for Brewly Store.'
})
</script>

<template>
  <div class="auth-page auth-content space-y-12">
    <section class="auth-page__hero space-y-5">
      <UiSectionTitle :title="$t('auth.sigIn.title')" :subtitle="$t('auth.sigIn.description')" />
    </section>
  </div>
</template>

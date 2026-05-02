<script setup lang="ts">
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'
</script>

<template>
  <section class="home-hero home-hero--primary space-y-6">
    <UiSectionTitle
      overline="Nuxt 4 Starter"
      :title="$t('home.title')"
      :subtitle="$t('home.subtitle')"
    />
    <div
      class="home-hero__status inline-flex items-center gap-2 rounded-full border border-ui-border bg-surface px-4 py-2 text-sm text-brand-primary"
    >
      <span class="home-hero__status-dot h-2 w-2 rounded-full bg-brand-primary" />
      {{ $t('home.status') }}
    </div>

    <div class="home-hero__progress rounded-xl border border-ui-border bg-surface p-4">
      <p
        class="home-hero__progress-title mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-text-secondary"
      >
        {{ $t('home.progress.title') }}
      </p>
      <ul class="home-hero__progress-list space-y-2 text-sm text-text-muted">
        <li class="home-hero__progress-item">• {{ $t('home.progress.one') }}</li>
        <li class="home-hero__progress-item">• {{ $t('home.progress.two') }}</li>
        <li class="home-hero__progress-item">• {{ $t('home.progress.three') }}</li>
        <li class="home-hero__progress-item">• {{ $t('home.progress.four') }}</li>
      </ul>
    </div>
  </section>
</template>

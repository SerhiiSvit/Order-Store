<script setup lang="ts">
import UiCard from '~/components/ui/UiCard.vue'
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'

useSeoMeta({
  title: 'About | Brewly Store',
  description: 'Project architecture, workflow rules, and stack overview for Brewly Store.'
})
</script>

<template>
  <div class="about-page about-content space-y-12">
    <section class="about-page__hero space-y-5">
      <UiSectionTitle
        overline="Brewly Store"
        :title="$t('about.title')"
        :subtitle="$t('about.description')"
      />
      <p class="about-page__mission max-w-3xl text-text-muted">
        {{ $t('about.mission') }}
      </p>
    </section>

    <section class="about-page__principles-section space-y-6">
      <UiSectionTitle :title="$t('about.principlesTitle')" />
      <div class="about-page__principles-grid grid gap-4 md:grid-cols-3">
        <UiCard class="about-page__principle-card">
          <h3 class="about-page__principle-title mb-2 font-medium text-lg text-text-primary">
            {{ $t('about.principles.one.title') }}
          </h3>
          <p class="about-page__principle-text text-text-muted">
            {{ $t('about.principles.one.text') }}
          </p>
        </UiCard>
        <UiCard class="about-page__principle-card">
          <h3 class="about-page__principle-title mb-2 font-medium text-lg text-text-primary">
            {{ $t('about.principles.two.title') }}
          </h3>
          <p class="about-page__principle-text text-text-muted">
            {{ $t('about.principles.two.text') }}
          </p>
        </UiCard>
        <UiCard class="about-page__principle-card">
          <h3 class="about-page__principle-title mb-2 font-medium text-lg text-text-primary">
            {{ $t('about.principles.three.title') }}
          </h3>
          <p class="about-page__principle-text text-text-muted">
            {{ $t('about.principles.three.text') }}
          </p>
        </UiCard>
      </div>
    </section>

    <section class="about-page__stack-section space-y-6">
      <UiSectionTitle :title="$t('about.stackTitle')" />
      <ul class="about-page__stack-list grid gap-3 md:grid-cols-2">
        <li
          class="about-page__stack-item rounded-xl border border-ui-border bg-surface px-4 py-3 text-text-secondary"
        >
          {{ $t('about.stack.one') }}
        </li>
        <li
          class="about-page__stack-item rounded-xl border border-ui-border bg-surface px-4 py-3 text-text-secondary"
        >
          {{ $t('about.stack.two') }}
        </li>
        <li
          class="about-page__stack-item rounded-xl border border-ui-border bg-surface px-4 py-3 text-text-secondary"
        >
          {{ $t('about.stack.three') }}
        </li>
        <li
          class="about-page__stack-item rounded-xl border border-ui-border bg-surface px-4 py-3 text-text-secondary"
        >
          {{ $t('about.stack.four') }}
        </li>
      </ul>
    </section>

    <section
      class="about-page__workflow border-brand-primary/20 space-y-4 rounded-2xl border bg-surface-strong p-6"
    >
      <h3 class="about-page__workflow-title font-semibold text-xl text-brand-primary">
        {{ $t('about.workflowTitle') }}
      </h3>
      <p class="about-page__workflow-text text-text-secondary">{{ $t('about.workflowText') }}</p>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '~/assets/styles/pages/about/index';
</style>

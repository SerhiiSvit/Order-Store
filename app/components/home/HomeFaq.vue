<script setup lang="ts">
import UiCard from '~/components/ui/UiCard.vue'
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'
</script>

<template>
  <section class="home-faq space-y-6">
    <UiSectionTitle :title="$t('home.faqTitle')" />
    <div class="home-faq__grid grid gap-4 md:grid-cols-2">
      <UiCard class="home-faq__card">
        <h3 class="home-faq__question mb-2 font-medium text-lg text-text-primary">
          {{ $t('home.faq.one.q') }}
        </h3>
        <p class="home-faq__answer text-text-muted">{{ $t('home.faq.one.a') }}</p>
      </UiCard>
      <UiCard class="home-faq__card">
        <h3 class="home-faq__question mb-2 font-medium text-lg text-text-primary">
          {{ $t('home.faq.two.q') }}
        </h3>
        <p class="home-faq__answer text-text-muted">{{ $t('home.faq.two.a') }}</p>
      </UiCard>
    </div>
  </section>
</template>

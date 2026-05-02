<script setup lang="ts">
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'

const links = [
  { key: 'x', href: '#' },
  { key: 'instagram', href: '#' },
  { key: 'youtube', href: '#' }
]
</script>

<template>
  <section class="home-socials space-y-6">
    <UiSectionTitle :title="$t('home.socialsTitle')" />
    <ul class="home-socials__list flex flex-wrap gap-3">
      <li v-for="link in links" :key="link.key" class="home-socials__item">
        <a
          :href="link.href"
          class="home-socials__link inline-flex items-center rounded-lg border border-ui-border bg-bg-base px-4 py-2 text-sm font-medium text-text-secondary transition hover:border-brand-primary hover:text-brand-primary"
        >
          {{ $t(`home.socials.${link.key}`) }}
        </a>
      </li>
    </ul>
  </section>
</template>

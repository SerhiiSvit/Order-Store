<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const year = new Date().getFullYear()

const footerLinks = computed(() => [
  { label: t('footer.copyright.link.privacy'), to: '#' },
  { label: t('footer.copyright.link.terms'), to: '#' },
  { label: t('footer.copyright.link.pricing'), to: '#' }
])
</script>

<template>
  <div class="w-full bg-[#03081f] px-6 py-5 text-white">
    <div class="container flex items-center justify-between">
      <div class="flex items-center justify-between">
        <p>
          {{ $t('footer.copyright.title.titleLogo') }}
          {{ $t('footer.copyright.title.titleDev') }}
          {{ year }},
          {{ $t('footer.copyright.title.titleRights') }}
        </p>
      </div>

      <div class="flex items-center justify-between">
        <nav class="mr-10">
          <ul class="flex items-center gap-x-8 gap-y-2">
            <li v-for="item in footerLinks" :key="item.label">
              <NuxtLink
                :to="item.to"
                class="font-poppins text-[15px] font-normal leading-[normal] text-white"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <p>{{ $t('footer.copyright.share') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const legalPages = computed(() => [
  { label: t('footer.legal.links.terms'), to: '#' },
  { label: t('footer.legal.links.privacy'), to: '#' },
  { label: t('footer.legal.links.cookies'), to: '#' },
  { label: t('footer.legal.links.subscription'), to: '#' }
])

const importantLinks = computed(() => [
  { label: t('footer.link.links.getHelp'), to: '#' },
  { label: t('footer.link.links.addRestaurant'), to: '#' },
  { label: t('footer.link.links.signUpDeliver'), to: '#' },
  { label: t('footer.link.links.createAccount'), to: '#' }
])

const socialLinks = computed(() => [
  { alt: t('footer.social.facebook'), src: '/icons/facebook.svg' },
  { alt: t('footer.social.instagram'), src: '/icons/instagram.svg' },
  { alt: t('footer.social.tiktok'), src: '/icons/tiktok.svg' },
  { alt: t('footer.social.snapchat'), src: '/icons/snapchat.svg' }
])
</script>

<template>
  <div class="w-full bg-[#d9d9d9]/60">
    <div
      class="grid grid-cols-1 gap-10 pb-[58px] pt-[90px] lg:grid-cols-[minmax(280px,420px)_minmax(320px,1fr)_220px_220px]"
    >
      <div class="flex flex-col">
        <img class="h-auto w-[220px] max-w-full lg:w-[268px]" alt="Logo" src="/logo-footer.png" />

        <img
          class="mt-8 h-auto w-[300px] max-w-full lg:w-[361px]"
          alt="App store badges en"
          src="/app-store-badges-en.png"
        />

        <p
          class="mt-5 w-[311px] text-[15px] font-normal leading-[normal] text-black [font-family:'Poppins',Helvetica]"
        >
          {{ t('footer.title') }}
        </p>
      </div>

      <div class="flex flex-col">
        <h2
          class="font-bold text-lg leading-[43px] text-[#03081f] [font-family:'Poppins',Helvetica]"
        >
          {{ t('footer.subscribe.title') }}
        </h2>

        <form class="mt-4 flex w-full max-w-[485px] items-center rounded-[120px] bg-[#d9d9d9]">
          <input
            type="email"
            :placeholder="t('footer.subscribe.placeholder')"
            aria-label="Email address"
            class="h-[59px] flex-1 border-0 bg-transparent px-[30px] text-[15px] font-normal leading-[43px] text-[#00000099] shadow-none [font-family:'Poppins',Helvetica] focus-visible:ring-0"
          />
          <button
            type="submit"
            class="h-[59px] rounded-[120px] bg-[#fc8a06] px-10 font-medium text-lg leading-[normal] text-white [font-family:'Poppins',Helvetica] hover:bg-[#fc8a06]/90"
          >
            {{ t('footer.subscribe.button') }}
          </button>
        </form>

        <p
          class="mt-2 text-[13px] font-normal leading-[43px] text-[#03081f] [font-family:'Poppins',Helvetica]"
        >
          <span>{{ t('footer.subscribe.emailText') }}{{ ' ' }}</span>
          <NuxtLink to="#" class="underline">{{ t('footer.subscribe.emailPolicy') }}</NuxtLink>
        </p>

        <nav aria-label="Social media" class="mt-3">
          <ul class="flex items-center gap-[14px]">
            <li v-for="social in socialLinks" :key="social.alt">
              <NuxtLink to="#" :aria-label="social.alt" class="block">
                <img class="h-[45px] w-[45px]" :alt="social.alt" :src="social.src" />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <nav aria-label="t('footer.legal.title')" class="flex flex-col">
        <h2
          class="font-bold text-lg leading-[43px] text-[#03081f] [font-family:'Poppins',Helvetica]"
        >
          {{ t('footer.legal.title') }}
        </h2>

        <ul class="mt-1 space-y-0">
          <li v-for="item in legalPages" :key="item.label">
            <NuxtLink
              :to="item.to"
              class="text-[15px] font-normal leading-[43px] text-black underline [font-family:'Poppins',Helvetica]"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <nav aria-label="t('footer.link.title')" class="flex flex-col">
        <h2
          class="font-bold text-lg leading-[43px] text-[#03081f] [font-family:'Poppins',Helvetica]"
        >
          {{ t('footer.link.title') }}
        </h2>

        <ul class="mt-1 space-y-0">
          <li v-for="item in importantLinks" :key="item.label">
            <NuxtLink
              :to="item.to"
              class="text-[15px] font-normal leading-[43px] text-black underline [font-family:'Poppins',Helvetica]"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

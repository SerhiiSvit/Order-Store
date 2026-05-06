<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'

const { t } = useI18n()

const orderCards = computed(() => [
  {
    step: t('home.hero.notification.one.number'),
    userName: t('home.hero.notification.one.userName'),
    userIcon: '/icons/ok.svg',
    time: t('home.hero.notification.one.time'),
    title: t('home.hero.notification.one.title'),
    description: t('home.hero.notification.one.description')
  },
  {
    step: t('home.hero.notification.two.number'),
    userName: t('home.hero.notification.two.userName'),
    userIcon: '/icons/ok.svg',
    time: t('home.hero.notification.two.time'),
    title: t('home.hero.notification.two.title'),
    description: t('home.hero.notification.two.description')
  },
  {
    step: t('home.hero.notification.three.number'),
    userName: t('home.hero.notification.three.userName'),
    userIcon: '/icons/ok.svg',
    time: t('home.hero.notification.three.time'),
    title: t('home.hero.notification.three.title'),
    description: t('home.hero.notification.three.description')
  }
])
</script>

<template>
  <section class="w-full rounded-[16px] bg-[#03081f]">
    <div class="grid min-h-[610px] grid-cols-[1fr_626px]">
      <div class="ml-[57px] flex w-[510px] flex-col justify-center">
        <p class="text-base font-normal leading-[66px] text-white">
          {{ t('home.hero.suptitle') }}
        </p>

        <h1
          class="font-weight-semibold text-[54px] font-semibold leading-[66px] tracking-[0] text-transparent"
        >
          <span class="text-white">{{ t('home.hero.title') }} {{ ' ' }}</span>
          <span class="text-[#fc8a06]">{{ t('home.hero.subtitle') }}</span>
        </h1>

        <div class="mt-8 w-[467px]">
          <p class="pl-[21px] text-[13px] font-normal leading-[66px] text-white">
            {{ t('home.hero.status.title') }}
          </p>

          <div class="relative mt-[-2px] flex h-[57px] items-center rounded-[120px] bg-white">
            <input
              defaultValue=""
              :placeholder="t('home.hero.status.placeholder')"
              class="h-full flex-1 rounded-[120px] border-0 bg-transparent pl-7 pr-[200px] text-[15px] font-normal text-[#000000cc] shadow-none placeholder:text-[#000000cc] focus-visible:ring-0"
            />

            <button
              class="absolute right-[0px] top-[0px] h-[57px] w-[188px] rounded-[120px] bg-[#fc8a06] text-base font-bold text-white hover:bg-[#fc8a06]"
            >
              {{ t('home.hero.status.button') }}
            </button>
          </div>
        </div>
      </div>

      <div class="relative flex items-end">
        <img
          class="absolute bottom-0 left-[-220px] z-20 h-[541px] w-[465px] object-cover"
          alt="hero image"
          src="/heroImage.png"
        />

        <img
          class="absolute bottom-0 left-[-400px] z-0 h-[541px] w-[465px] object-cover opacity-30 blur-[1px] brightness-50 grayscale transition-all"
          alt="hero image background"
          src="/heroImageBack.png"
        />

        <div class="h-[565px] w-full rounded-[282.5px_0px_12px_0px] bg-[#fc8a06] p-8">
          <div class="flex h-full w-full flex-col items-end justify-end gap-[38px]">
            <div
              v-for="(card, index) in orderCards"
              class="relative flex h-full items-center justify-end"
              :key="card.step"
              :style="{ marginRight: index === 1 ? '0px' : index === 2 ? '60px' : '100px' }"
            >
              <div
                class="absolute right-[10px] top-[-35px] text-[48px] font-semibold leading-normal text-transparent [-webkit-text-stroke:0.2px_#ffffff]"
              >
                <p>{{ card.step }}</p>
              </div>

              <div
                class="w-[344px] rounded-[16px_16px_16px_16px] bg-[#f8f8f8] bg-cover bg-[50%_50%] px-2 py-4 text-[14px] text-[#000000]"
              >
                <div class="mb-2 flex items-center justify-between text-[16px] text-[#03081f]">
                  <div class="flex items-center gap-3">
                    <img class="h-[18px] object-cover" :alt="card.userName" :src="card.userIcon" />
                    <p class="">{{ card.userName }}</p>
                  </div>
                  <p class="text-[12px]">{{ card.time }}</p>
                </div>

                <p class="mb-1 font-semibold">
                  {{ card.title }}
                </p>

                <p class="">
                  {{ card.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

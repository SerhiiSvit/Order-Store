<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const restaurants = computed(() => [
  {
    name: t('home.popularRestaurants.restaurants.mcDonald'),
    image: '/mcDonald.png'
  },
  {
    name: t('home.popularRestaurants.restaurants.papaJohns'),
    image: '/papaJohns.png'
  },
  {
    name: t('home.popularRestaurants.restaurants.kfc'),
    image: '/kfc.png'
  },
  {
    name: t('home.popularRestaurants.restaurants.texasChicken'),
    image: '/texas_chicken.png'
  },
  {
    name: t('home.popularRestaurants.restaurants.burgerKing'),
    image: '/burger_king.png'
  },
  {
    name: t('home.popularRestaurants.restaurants.shaurma1'),
    image: '/shaurma1.png'
  }
])
</script>

<template>
  <section class="w-full">
    <div class="w-full">
      <header class="mb-[35px] pl-[21px]">
        <h2 class="text-[32px] font-bold leading-[normal] tracking-[0] text-black">
          {{ t('home.popularRestaurants.title') }}
        </h2>
      </header>
      <div class="flex w-full gap-5">
        <div v-for="restaurant in restaurants" class="h-[266px] w-[238px]">
          <button
            :key="restaurant.name"
            type="button"
            class="w-full text-left transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fc8a06] focus-visible:ring-offset-2"
          >
            <div
              class="relative flex h-[266px] w-full flex-col overflow-hidden rounded-xl border-0 bg-[#fc8a06] p-0 shadow-none"
            >
              <img
                class="h-[203px] w-full rounded-t-xl object-cover"
                :alt="restaurant.name"
                :src="restaurant.image"
              />
              <div class="h-[63px] py-[18px] text-center">
                <span class="text-lg font-bold leading-[normal] tracking-[0] text-white">
                  {{ restaurant.name }}
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

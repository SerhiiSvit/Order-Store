<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const categories = computed(() => [
  {
    name: t('home.popularCategories.categories.burgers.name'),
    count: t('home.popularCategories.categories.burgers.count'),
    image: '/burger.png'
  },
  {
    name: t('home.popularCategories.categories.salads.name'),
    count: t('home.popularCategories.categories.salads.count'),
    image: '/salads.png'
  },
  {
    name: t('home.popularCategories.categories.pasta.name'),
    count: t('home.popularCategories.categories.pasta.count'),
    image: '/pasta.png'
  },
  {
    name: t('home.popularCategories.categories.pizza.name'),
    count: t('home.popularCategories.categories.pizza.count'),
    image: '/pizza.png'
  },
  {
    name: t('home.popularCategories.categories.breakfast.name'),
    count: t('home.popularCategories.categories.breakfast.count'),
    image: '/breakfast.png'
  },
  {
    name: t('home.popularCategories.categories.soups.name'),
    count: t('home.popularCategories.categories.soups.count'),
    image: '/soups.png'
  }
])
</script>

<template>
  <section class="w-full">
    <div class="w-full">
      <h2 class="mb-6 text-[32px] font-bold leading-[normal] tracking-[0] text-[#03081f]">
        {{ t('home.popularCategories.title') }}
      </h2>

      <div class="flex w-full gap-5 overflow-x-auto">
        <div
          v-for="category in categories"
          :key="category.name"
          class="w-[238px] shrink-0 overflow-hidden rounded-[12px] border-0 bg-[#03081f] shadow-none"
        >
          <div class="p-0">
            <article class="flex h-full flex-col">
              <img
                class="h-[203px] w-full object-cover"
                :alt="category.name"
                :src="category.image"
              />

              <div class="flex w-full flex-1 flex-col justify-start px-[22px] py-[10px]">
                <h3 class="text-[18px] font-bold leading-[normal] tracking-[0] text-[#fc8a06]">
                  {{ category.name }}
                </h3>

                <p class="text-[13px] font-normal leading-[normal] tracking-[0] text-white">
                  {{ category.count }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

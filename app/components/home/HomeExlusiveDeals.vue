<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const categories = [
  { id: 'all', label: 'others' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'sushi', label: 'Sushi' },
  { id: 'pizza', label: 'Pizza & Fast food' }
]

const activeTab = ref('all')

const deals = [
  {
    id: 1,
    title: 'Chef Burgers London',
    category: 'pizza',
    discount: '-40%',
    image: '/deals/burger.jpg'
  },
  {
    id: 2,
    title: 'Grand Ai Cafe London',
    category: 'pizza',
    discount: '-20%',
    image: '/deals/salad_grand-london.png'
  },
  {
    id: 3,
    title: 'Butterbrot Cafe London',
    category: 'vegan',
    discount: '-17%',
    image: '/deals/butterbrot.png'
  },
  {
    id: 4,
    title: 'Burger London',
    category: 'sushi',
    discount: '-19%',
    image: '/deals/burger.jpg'
  }
]

const filteredDeals = computed(() => {
  if (activeTab.value === 'all') return deals
  return deals.filter(item => item.category === activeTab.value)
})
</script>

<template>
  <section class="mx-auto w-full">
    <div class="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
      <h2 class="font-bold text-2xl">Up to -40% 🎊 Order.uk exclusive deals</h2>

      <nav class="flex items-center gap-2">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeTab = cat.id"
          class="rounded-full border px-6 py-2 font-medium text-sm transition-all"
          :class="[
            activeTab === cat.id
              ? 'border-[#FC8A06] bg-orange-50 text-[#FC8A06]'
              : 'border-transparent text-gray-600 hover:bg-gray-100'
          ]"
        >
          {{ cat.label }}
        </button>
      </nav>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="deal in filteredDeals"
        :key="deal.id"
        class="group relative h-[250px] cursor-pointer overflow-hidden rounded-2xl"
      >
        <img
          :src="deal.image"
          :alt="deal.title"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        <div
          class="absolute right-5 top-0 rounded-b-xl bg-[#03081F] px-4 py-2 font-bold text-white"
        >
          {{ deal.discount }}
        </div>

        <div class="absolute bottom-6 left-6 text-white">
          <p class="font-medium text-sm text-[#FC8A06]">Restaurant</p>
          <h3 class="font-bold text-xl">{{ deal.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const metrics = computed(() => [
  {
    value: '546+',
    label: 'Registered Riders'
  },
  {
    value: '789,900+',
    label: 'Orders Delivered'
  },
  {
    value: '690+',
    label: 'Restaurants Partnered'
  },
  {
    value: '17,457+',
    label: 'Food Items'
  }
])
</script>

<template>
  <section
    class="container mx-auto rounded-xl border-0 bg-[#fc8a06] px-[100px] py-[42px] shadow-none"
  >
    <div class="grid h-[158px] grid-cols-4">
      <div
        v-for="metric in metrics"
        :key="metric.label"
        class="border-r-1 flex flex-col items-center justify-center border-white text-center"
      >
        <div class="text-[54px] font-light leading-[38px] text-white">
          {{ metric.value }}
        </div>
        <div class="mt-3 text-[24px] font-bold leading-[38px] text-white">
          {{ metric.label }}
        </div>
      </div>
    </div>
  </section>
</template>

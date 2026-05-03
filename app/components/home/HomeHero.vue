<script setup lang="ts">
import UiSectionTitle from '~/components/ui/UiSectionTitle.vue'
const orderCards = [
  {
    step: '1',
    title: "We've Received your order!",
    description: 'Awaiting Restaurant acceptance',
  },
  {
    step: '2',
    title: 'Order Accepted!',
    description: 'Your order will be delivered shortly',
  },
  {
    step: '3',
    title: 'Your rider’s nearby!',
    description: 'They’re almost there - get ready',
  }
]
</script>

<template>
  <section class="container w-full bg-[#03081f] rounded-[16px]">
    <!-- <UiSectionTitle
      overline="Nuxt 4 Starter"
      :title="$t('home.title')"
      :subtitle="$t('home.subtitle')"
    /> -->
    <div class="grid min-h-[610px] grid-cols-[1fr_626px]">
      <div class="flex w-[510px] flex-col justify-center ml-[57px]">
        <p class="text-base font-normal leading-[66px] text-white">
          Order Restaurant food, takeaway and groceries.
        </p>

        <h1 class="text-[54px] font-semibold leading-[66px] tracking-[0] text-transparent font-weight-semibold">
          <span class="text-white">Feast Your Senses, </span>
          <span class="text-[#fc8a06]">Fast and Fresh</span>
        </h1>

        <div class="mt-8 w-[467px]">
          <p class="pl-[21px] text-[13px] font-normal leading-[66px] text-white">
            Enter a postcode to see what we deliver
          </p>

          <div class="relative mt-[-2px] flex h-[57px] items-center rounded-[120px] bg-white">
            <input
              defaultValue=""
              placeholder="e.g. EC4R 3TE"
              class="h-full flex-1 rounded-[120px] border-0 bg-transparent pl-7 pr-[200px] text-[15px] font-normal text-[#000000cc] shadow-none placeholder:text-[#000000cc] focus-visible:ring-0"
            />

            <button
              class="absolute right-[0px] top-[0px] h-[57px] w-[188px] rounded-[120px] bg-[#fc8a06] text-base font-bold text-white hover:bg-[#fc8a06]"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div class="flex items-end relative">
        <img
          class="h-[541px] w-[465px] left-[-220px] object-cover absolute bottom-0 z-20"
          alt="hero image"
          src="/heroImage.png"
        />

        <img
          class="h-[541px] w-[465px] left-[-400px] object-cover absolute bottom-0 z-0 opacity-30 grayscale brightness-50 blur-[1px] transition-all"
          alt="hero image background"
          src="/heroImageBack.png"
        />

        <div
          class=" w-full h-[565px] rounded-[282.5px_0px_12px_0px] bg-[#fc8a06] p-8"
        >
          <div class="flex w-full h-full items-end justify-end flex-col gap-[38px]">
            <div v-for="card in orderCards" :key="card.step" class="relative flex justify-end items-center h-full">
              <div
                class="absolute right-[10px] top-[-35px] text-[48px] font-semibold leading-normal text-transparent [-webkit-text-stroke:0.2px_#ffffff]"
              >
                {{ card.step }}
              </div>

              <div
                class=" h-[100px] w-[344px] px-2 py-4 bg-[#f8f8f8]  rounded-[16px_16px_16px_16px] bg-cover bg-[50%_50%] text-[#000000]"
              >
                <img
                  class=" h-[15px] object-cover mb-2 flex" alt=Logo src=/logo.png
                />

                <p class="mb-1 font-semibold">
                  {{ card.title }}
                </p>

                <p
                  class=""
                >
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

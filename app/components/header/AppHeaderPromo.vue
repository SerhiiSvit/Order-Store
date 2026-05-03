<script setup lang="ts"></script>

<template>
  <div class="container">
    <div
      class="flex h-[70px] w-full items-center justify-between rounded-b-xl border border-solid border-[#0000001a] bg-[#f9f9f9] px-9"
    >
      <div
        class="text-[15px] font-normal leading-normal text-black [font-family:'Poppins',Helvetica]"
      >
        <span
          class="mr-3 text-[25px] font-medium leading-none text-black [font-family:'Poppins',Helvetica]"
        >
          🌟
        </span>

        <span class="font-medium">{{ $t('headerPromotion.title') }}</span>

        <span class="font-bold text-[#fc8a06] underline">
          {{ $t('headerPromotion.promo') }}
        </span>
      </div>

      <div class="ml-auto mr-10 flex items-center gap-3">
        <img class="h-[25px] w-[25px]" alt="Location" src="/icons/location.svg" />

        <p
          class="text-[15px] font-medium leading-normal text-[#03081f] [font-family:'Poppins',Helvetica]"
        >
          <span>{{ $t('headerPromotion.location.street') }}, {{ ' ' }}</span>

          <NuxtLink to="/" rel="noopener noreferrer" target="_blank" class="underline">
            {{ $t('headerPromotion.location.index') }},
          </NuxtLink>

          <span>{{ ' ' }}{{ $t('headerPromotion.location.city') }}</span>
        </p>

        <button
          type="button"
          class="text-sm font-medium leading-normal text-[#fc8a06] underline [font-family:'Poppins',Helvetica]"
        >
          {{ $t('headerPromotion.changeLocation') }}
        </button>
      </div>

      <div
        class="flex h-[70px] w-[382px] items-center justify-between overflow-hidden rounded-b-xl border border-solid bg-[#018542]"
      >
        <div class="border-right-[#fff] flex h-full w-[88px] items-center justify-center">
          <img class="h-[43px] w-[43px]" alt="Full shopping basket" src="/icons/cart.svg" />
        </div>

        <div class="border-right-[#fff] flex h-full w-[111px] items-center justify-center">
          <span
            class="text-base font-semibold leading-normal text-white [font-family:'Poppins',Helvetica]"
          >
            23 Items
          </span>
        </div>

        <div class="border-right-[#fff] flex h-full w-[115px] items-center justify-center">
          <span
            class="text-base font-semibold leading-normal text-white [font-family:'Poppins',Helvetica]"
          >
            GBP 79.89
          </span>
        </div>

        <div class="flex h-full flex-1 items-center justify-center">
          <button type="button" class="inline-flex items-center justify-center">
            <img class="h-[38px] w-[38px]" alt="Forward button" src="/icons/forward.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

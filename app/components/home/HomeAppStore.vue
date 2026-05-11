<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const promotionContent = {
  subtitle: 'Download the Order.uk app for faster ordering'
}
</script>

<template>
  <section class="mx-auto">
    <div class="relative w-full">
      <div
        class="absolute bottom-0 left-0 right-0 h-[93%] w-full rounded-[24px] bg-[linear-gradient(180deg,rgba(238,238,238,1)_0%,rgba(224,225,220,1)_100%)]"
      ></div>

      <div class="relative z-10 flex min-h-[651px] justify-center overflow-visible">
        <div class="relative">
          <img
            src="/app-store/friends.png"
            class="z-1 pointer-events-none absolute left-[-12px] top-[-8px] h-full object-contain opacity-20 blur-[3px] brightness-0"
          />

          <img
            src="/app-store/friends.png"
            class="relative z-20 h-full w-full object-contain object-bottom"
          />
        </div>

        <div class="!mr-15 flex w-full max-w-[700px] flex-col items-start justify-center">
          <div class="mb-8 flex items-center justify-start gap-4">
            <img class="h-16 w-[268px]" src="/logo.png" alt="Order.uk" />

            <h2 class="font-bold text-[64px] leading-none tracking-tight text-[#03081f]">
              ing is more
            </h2>
          </div>

          <div
            class="relative z-10 mb-6 flex h-[90px] w-[900px] -translate-x-[250px] items-center justify-end rounded-full bg-[#03081f] px-16 shadow-2xl"
          >
            <h3
              class="px-15 flex items-center justify-end py-7 font-medium text-[54px] tracking-tight"
            >
              <span class="text-[#fc8a06] underline decoration-2 underline-offset-4"
                >Personalised</span
              >
              <span class="text-white"> & Instant</span>
            </h3>
          </div>

          <p class="mb-6 w-full text-center text-[24px] tracking-[-0.96px] text-black">
            {{ promotionContent.subtitle }}
          </p>

          <div class="flex w-full justify-center gap-4">
            <a href="#" class="transition-opacity hover:opacity-80">
              <img class="h-14" src="/app-store-badges-en.png" alt="Download on App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

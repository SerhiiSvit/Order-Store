<script setup lang="ts">
const year = new Date().getFullYear()

const footerLinks = [
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms', to: '#' },
  { label: 'Pricing', to: '#' }
]
</script>

<template>
  <div class="w-full bg-[#03081f] px-6 py-5 text-white">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-between">
        <p>
          {{ $t('footer.copyright.title.titleDev') }} {{ year }},
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

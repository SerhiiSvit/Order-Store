<script setup lang="ts">
const navigationItems = [
  { label: 'Home', to: '/', active: true },
  { label: 'Browse Menu', to: '#', active: false },
  { label: 'Special Offers', to: '#', active: false },
  { label: 'Restaurants', to: '#', active: false },
  { label: 'Track Order', to: '#', active: false }
]
</script>

<template>
  <div
    class="header__inner container mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
  >
    <NuxtLink to="/" class="header__brand h-[53px] w-[215px]">
      <img src="/logo.png" alt="Logo"
    /></NuxtLink>

    <nav class="header__nav">
      <ul class="flex items-center gap-1">
        <li v-for="item in navigationItems" :key="item.label">
          <NuxtLink
            :to="item.to"
            class="font-poppins block rounded-[120px] px-8 py-3 text-sm font-medium transition-colors"
            :class="[item.active ? 'bg-[#fc8a06] text-white' : 'text-black hover:bg-gray-100']"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <NuxtLink
      class="h-auto shrink-0 rounded-[120px] bg-[#03081f] px-6 py-4 text-lg font-medium text-white [font-family:'Poppins',Helvetica] hover:bg-[#03081f]"
    >
      <span class="flex items-center gap-3">
        <img
          class="h-[27px] w-[30.97px] rounded-[1px] object-contain"
          alt="User icon"
          src="/icons/user.svg"
        />
        <span>{{ $t('header.account') }}</span>
      </span>
    </NuxtLink>
  </div>
</template>

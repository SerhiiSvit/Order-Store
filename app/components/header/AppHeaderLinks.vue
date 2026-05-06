<script setup lang="ts">
const { items: navigationItems } = useHeaderNavigation()
const { to } = useLocalePathSafe()
</script>

<template>
  <div
    class="header__inner container mx-auto flex max-w-6xl items-center justify-between py-3"
  >
    <NuxtLink to="/" class="header__brand h-[53px] w-[215px]">
      <img src="/logo.png" alt="Logo"
    /></NuxtLink>

    <nav class="header__nav">
      <ul class="flex items-center gap-1">
        <li v-for="item in navigationItems" :key="item.key">
          <NuxtLink
            v-if="item.href"
            :to="item.href"
            :aria-current="item.isActive ? 'page' : undefined"
            class="block rounded-pill px-8 py-3 text-sm font-medium transition-colors"
            :class="[
              item.isActive
                ? 'text-text-on-accent bg-brand-accent'
                : 'text-text-primary hover:bg-bg-soft'
            ]"
          >
            {{ $t(item.labelKey) }}
          </NuxtLink>

          <span
            v-else
            class="block cursor-default rounded-pill px-8 py-3 text-sm font-medium text-text-muted"
          >
            {{ $t(item.labelKey) }}
          </span>
        </li>
      </ul>
    </nav>

    <NuxtLink
      :to="to('/auth')"
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

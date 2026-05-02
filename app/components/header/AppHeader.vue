<template>
  <header
    class="header bg-bg-base/90 sticky top-0 z-header border-b border-ui-border backdrop-blur"
  >
    <div class="header__inner mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <NuxtLink to="/" class="header__brand text-lg font-semibold tracking-tight text-text-primary"
        >Brewly Store</NuxtLink
      >
      <nav class="header__nav flex items-center gap-4 text-sm text-text-secondary">
        <NuxtLink to="/catalog" class="header__link transition-colors hover:text-brand-primary">{{
          $t('headerNav.shop')
        }}</NuxtLink>
        <NuxtLink to="#how" class="header__link transition-colors hover:text-brand-primary">{{
          $t('headerNav.how')
        }}</NuxtLink>
        <NuxtLink to="/about" class="header__link transition-colors hover:text-brand-primary">{{
          $t('headerNav.about')
        }}</NuxtLink>
        <NuxtLink to="#faq" class="header__link transition-colors hover:text-brand-primary">{{
          $t('headerNav.faq')
        }}</NuxtLink>
      </nav>

      <nav class="header__nav flex items-center gap-4 text-sm text-text-secondary">
        <NuxtLink to="/account" class="header__link transition-colors hover:text-brand-primary">{{
          $t('headerNav.account')
        }}</NuxtLink>
        <NuxtLink to="/cart" class="header__link transition-colors hover:text-brand-primary">{{
          $t('headerNav.cart')
        }}</NuxtLink>
        <NuxtLink to="/auth" class="header__link transition-colors hover:text-brand-primary">{{
          $t('headerNav.auth')
        }}</NuxtLink>
      </nav>
    </div>
  </header>
</template>

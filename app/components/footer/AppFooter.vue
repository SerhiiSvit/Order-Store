<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="header bg-bg-base/90 mt-auto border-b border-ui-border backdrop-blur">
    <div class="header__inner mx-auto flex max-w-6xl items-start justify-between px-4 py-3">
      <NuxtLink to="/" class="header__brand text-lg font-semibold tracking-tight text-text-primary"
        >Brewly Store</NuxtLink
      >

      <nav
        class="header__nav flex flex-col items-start justify-items-start gap-4 text-sm text-text-secondary"
      >
        <NuxtLink to="/" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.shop.catalog')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.shop.featured')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.shop.subscription')
        }}</NuxtLink>
      </nav>

      <nav
        class="header__nav flex flex-col items-start justify-items-start gap-4 text-sm text-text-secondary"
      >
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.help.faq')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.help.contact')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.help.delivery')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.help.returns')
        }}</NuxtLink>
      </nav>

      <nav
        class="header__nav flex flex-col items-start justify-items-start gap-4 text-sm text-text-secondary"
      >
        <NuxtLink to="/auth" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.account.auth')
        }}</NuxtLink>
        <NuxtLink to="/account" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.account.profile')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.account.subscription')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.account.order')
        }}</NuxtLink>
      </nav>

      <nav
        class="header__nav flex flex-col items-start justify-items-start gap-4 text-sm text-text-secondary"
      >
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.legal.privacy')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.legal.terms')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.legal.subscription')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.legal.cookies')
        }}</NuxtLink>
      </nav>

      <nav
        class="header__nav flex flex-col items-start justify-items-start gap-4 text-sm text-text-secondary"
      >
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.social.instagram')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.social.facebook')
        }}</NuxtLink>
        <NuxtLink to="#" class="header__link transition-colors hover:text-brand-primary">{{
          $t('footerNav.social.linkedin')
        }}</NuxtLink>
      </nav>
    </div>

    <div class="header__inner mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <p>&copy; {{ year }} Brewly Store. All rights reserved.</p>
    </div>
  </footer>
</template>

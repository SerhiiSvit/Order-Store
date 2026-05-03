<script setup lang="ts">
import AppHeaderLinks from './AppHeaderLinks.vue'
import AppHeaderPromo from './AppHeaderPromo.vue'

const orderCards = [
  {
    step: '1',
    title: "We've Received your order!",
    description: 'Awaiting Restaurant acceptance',
    logoWidth: 'w-[58px]',
    logoLeft: 'left-[33px]',
    contentWidth: 'w-[236px]',
    contentHeight: 'h-[71px]',
    icon: {
      src: '/tracking.png',
      alt: 'Tracking',
      className: 'absolute top-[42px] left-[202px] w-3 h-3'
    }
  },
  {
    step: '2',
    title: 'Order Accepted!',
    description: 'Your order will be delivered shortly',
    logoWidth: 'w-[60px]',
    logoLeft: 'left-[31px]',
    contentWidth: 'w-[236px]',
    contentHeight: 'h-[71px]'
  },
  {
    step: '3',
    title: '',
    description: '',
    logoWidth: 'w-[58px]',
    logoLeft: 'left-[33px]',
    contentWidth: 'w-[111px]',
    contentHeight: 'h-7',
    icon: {
      src: '/tick-box.png',
      alt: 'Tick box',
      className: 'absolute top-[43px] left-[214px] w-[17px] h-[17px]'
    }
  }
]

const metrics = [
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
]
</script>

<template>
  <header
    class="header bg-bg-base/90 sticky top-0 z-header border-b border-ui-border backdrop-blur"
  >
    <AppHeaderPromo />

    <AppHeaderLinks />
  </header>
</template>

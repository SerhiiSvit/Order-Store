<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const questionTab = [
  { id: 'frequentQuestions', label: 'Frequent Questions' },
  { id: 'who', label: 'Who we are?' },
  { id: 'partnerProgram', label: 'Partner Program' },
  { id: 'support', label: 'Help & Support' }
]

const activeTab = ref('frequentQuestions')

const questions = [
  {
    id: 1,
    title: 'Place an Order!',
    question: 'frequentQuestions',
    description: 'Place order through our website or Mobile app',
    image: '/know/order-food.png'
  },
  {
    id: 2,
    title: 'Track Progress',
    question: 'frequentQuestions',
    description: 'Your can track your order status with delivery time',
    image: '/know/food.png'
  },
  {
    id: 3,
    title: 'Get your Order!',
    question: 'frequentQuestions',
    description: 'Receive your order at a lighting fast speed!',
    image: '/know/order.png'
  },
  {
    id: 4,
    title: 'Track Progress',
    question: 'who',
    description: 'Your can track your order status with delivery time',
    image: '/know/food.png'
  },
  {
    id: 5,
    title: 'Get your Order!',
    question: 'who',
    description: 'Receive your order at a lighting fast speed!',
    image: '/know/order.png'
  },
  {
    id: 6,
    title: 'Place an Order!',
    question: 'partnerProgram',
    description: 'Receive your order at a lighting fast speed!',
    image: '/know/order-food.png'
  },
  {
    id: 7,
    title: 'Track Progress',
    question: 'partnerProgram',
    description: 'Your can track your order status with delivery time',
    image: '/know/food.png'
  },
  {
    id: 8,
    title: 'Place an Order!',
    question: 'support',
    description: 'Receive your order at a lighting fast speed!',
    image: '/know/order-food.png'
  },
  {
    id: 9,
    title: 'Get your Order!',
    question: 'support',
    description: 'Place order through our website or Mobile app',
    image: '/know/order.png'
  }
]

const filteredQuestions = computed(() => {
  if (activeTab.value === 'all') return questions
  return questions.filter(item => item.question === activeTab.value)
})
</script>

<template>
  <section class="mx-auto">
    <div class="rounded-xl bg-[#d9d9d9] px-[115px] py-[115px]">
      <div class="mb-9 flex items-center justify-between">
        <h2 class="font-bold text-[32px] leading-normal text-black">Know more about us!</h2>

        <nav aria-label="Know more navigation">
          <ul class="flex items-center gap-8 text-base leading-normal text-black">
            <li v-for="question in questionTab" :key="question.id">
              <button
                @click="activeTab = question.id"
                class="rounded-full border px-6 py-2 font-bold text-sm transition-all"
                :class="[
                  activeTab === question.id
                    ? 'text-bold border-[#FC8A06] bg-orange-50'
                    : 'border-transparent text-gray-600 hover:bg-gray-100'
                ]"
              >
                {{ question.label }}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div class="rounded-xl border-0 bg-[#03081f] shadow-none">
        <div class="p-0">
          <div class="grid min-h-[526px] grid-cols-[474px_1px_1fr]">
            <div class="flex flex-col px-[72px] py-[78px]">
              <button
                class="h-[62px] w-[346px] rounded-[120px] bg-[#fc8a06] font-bold text-lg tracking-[-0.36px] text-black hover:bg-[#fc8a06]"
              >
                How does Order.UK work?
              </button>

              <div
                class="mt-[34px] flex flex-col gap-[30px] font-bold text-lg tracking-[-0.36px] text-white"
              >
                <button type="button" class="text-left">What payment methods are accepted?</button>
                <button type="button" class="text-left">Can I track my order in real-time?</button>
                <button type="button" class="text-center leading-normal">
                  Are there any special discounts or
                  <br />
                  promotions available?
                </button>
                <button type="button" class="text-center leading-normal">
                  Is Order.UK available in my area?
                </button>
              </div>
            </div>

            <div class="bg-[#ffffff1a]" />

            <div class="flex flex-col items-center px-8 py-[88px]">
              <div class="grid grid-cols-3 gap-5">
                <div
                  v-for="item in filteredQuestions"
                  :key="item.id"
                  class="h-[285px] w-[238px] rounded-xl border-0 bg-[#d9d9d9] shadow-none"
                >
                  <div class="flex h-full flex-col items-center px-7 py-7 text-center">
                    <h3 class="mb-[14px] font-bold text-[18px] tracking-[-0.36px] text-[#03081f]">
                      {{ item.title }}
                    </h3>

                    <img
                      class="mb-[5px] h-32 w-32 object-cover"
                      :alt="item.title"
                      :src="item.image"
                    />

                    <p class="font-medium text-[16px] leading-[25px] tracking-[-0.32px] text-black">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>

              <p
                class="mt-[33px] max-w-[625px] text-center text-base font-normal tracking-[-0.32px] text-white"
              >
                Order.UK simplifies the food ordering process. Browse through our diverse menu,
                select your favorite dishes, and proceed to checkout. Your delicious meal will be on
                its way to your doorstep in no time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

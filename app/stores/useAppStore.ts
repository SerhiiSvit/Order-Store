export const useAppStore = defineStore('app', () => {
  const isHydrated = ref(false)

  function markHydrated() {
    isHydrated.value = true
  }

  return {
    isHydrated,
    markHydrated
  }
})

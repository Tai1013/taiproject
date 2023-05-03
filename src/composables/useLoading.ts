import { ref, computed } from 'vue'

export const useLoading = () => {
  const isLoading = computed(() => loading.value !== 0)
  const loading = ref(0)

  const load = () => {
    loading.value++
  }
  const unload = () => {
    loading.value--
  }

  return {
    isLoading,

    load,
    unload
  }
}

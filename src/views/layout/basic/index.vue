<template lang="pug">
.layout
  header-comp
  router-view(v-slot="{ Component, route }")
    transition(
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    )
      component(:is="Component" :key="route.path")
</template>

<script setup lang="ts">
import HeaderComp from './header.vue'
</script>

<style scoped lang="scss">
</style>

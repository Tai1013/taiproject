<template lang="pug">
div(v-bind="$attrs" class="flex items-center")
  img(:class="svgClass" :src="pathFile(`@/assets/img/svg/${svg}.svg`)")
  p(v-if="name !== ''" class="ml-2" :class="nameClass") {{ name }}
</template>

<script setup lang="ts">
import { pathFile } from '@/helper'

defineProps({
  svg: {
    type: String,
    required: true
  },
  svgClass: {
    type: String,
    default: 'w-5 h-5'
  },
  name: {
    type: String,
    default: ''
  },
  nameClass: {
    type: String,
    default: 'text-sm capitalize'
  }
})
</script>

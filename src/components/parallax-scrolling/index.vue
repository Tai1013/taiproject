<template lang="pug">
div(
  class="parallax-scrolling"
  :class="{ 'absolute -z-50 w-full h-full': backScroll }"
)
  slot
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, nextTick } from 'vue'
import simpleParallax from 'simple-parallax-js'

const props = defineProps({
  backScroll: {
    type: Boolean,
    default: false
  },
  orientation: {
    type: String as PropType<'up' | 'down' | 'left' | 'right'>,
    default: 'up'
  },
  scale: {
    type: Number,
    default: 1.2
  },
  overflow: {
    type: Boolean,
    default: false
  },
  delay: {
    type: Number,
    default: 0.4
  },
  transition: {
    type: String,
    default: 'cubic-bezier(0,0,0,1)'
  },
  customContainer: {
    type: String as PropType<string | HTMLElement>,
    default: ''
  },
  customWrapper: {
    type: String,
    default: ''
  },
  maxTransition: {
    type: Number,
    default: 0
  }
})

onMounted(() => {
  nextTick(() => {
    const parallaxEl = document.getElementsByClassName('parallax-scrolling')
    new simpleParallax(parallaxEl, {
      orientation: props.orientation,
      scale: props.scale,
      overflow: props.overflow,
      delay: props.delay,
      transition: props.transition,
      customContainer: props.customContainer,
      customWrapper: props.customWrapper,
      maxTransition: props.maxTransition
    })
  })
})
</script>

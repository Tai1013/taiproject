<template lang="pug">
div(:class="parallaxName")
  slot
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, nextTick } from 'vue'
import simpleParallax from 'simple-parallax-js'

export interface Settings {
    orientation?: 'up' | 'down' | 'left' | 'right';
    scale?: number;
    overflow?: boolean;
    delay?: number;
    transition?: string;
    breakpoint?: number;
    customContainer?: string | HTMLElement;
    customWrapper?: string;
    maxTransition?: number;
}

const props = defineProps({
  parallaxName: {
    type: String,
    default: 'parallaxScrolling'
  },
  parallaxSettings: {
    type: Object as PropType<Settings>,
    default: () => ({})
  }
})

onMounted(() => {
  nextTick(() => {
    const parallaxEl = document.getElementsByClassName(props.parallaxName)
    new simpleParallax(parallaxEl, props.parallaxSettings)
  })
})
</script>

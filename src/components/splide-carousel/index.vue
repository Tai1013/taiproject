<template lang="pug">
splide(
  ref="splideRef"
  :options="options"
  :has-track="false"
  class="w-full h-full"
  @splide:active="onSplideMounted"
)
  splide-track(class="w-full h-full")
    splide-slide(
      v-for="(slide, index) in slides"
      :key="index"
      class="flex justify-center items-center"
    )
      slot(:name="index" :slide="slide" :slideIndex="splideIndex")
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Options } from '@splidejs/vue-splide'
import { ref, onMounted, nextTick, watch } from 'vue'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'

const props = defineProps({
  slides: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array as PropType<Record<string, any>>,
    required: true
  },
  type: {
    type: String as PropType<'slide' | 'loop' | 'fade'>,
    default: 'loop'
  },
  arrows: {
    type: Boolean,
    default: false
  },
  pagination: {
    type: Boolean,
    default: false
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  drag: {
    type: Boolean as PropType<boolean | 'free'>,
    default: true
  },
  direction: {
    type: String as PropType<'ltr' | 'rtl' | 'ttb'>,
    default: 'ltr'
  },
  speed: {
    type: Number,
    default: 800
  },
  interval: {
    type: Number,
    default: 4000
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  }
})

const splideIndex = ref<number>()

const options: Options = {
  rewind: true,
  speed: props.speed,
  rewindSpeed: props.speed,
  interval: props.interval,
  type: props.type,
  arrows: props.arrows,
  pagination: props.pagination,
  autoplay: props.autoplay,
  drag: props.drag,
  pauseOnHover: props.drag === false ? false : props.pauseOnHover,
  direction: props.direction
}

const onSplideMounted = ({ index }: { index: number }) => {
  splideIndex.value = index
}
</script>

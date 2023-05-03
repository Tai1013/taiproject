<template lang="pug">
.home-content
  div(class="relative md:min-h-screen md:flex before:bg-orange-100 before:h-2/3 before:absolute before:w-full before:bottom-0 before:inset-x-0 before:z-0 md:before:w-1/3 md:before:h-full")
    div(ref="selfCard" class="perspective-4 pt-16 md:py-16 container md:flex md:items-center lg:max-w-[75%] xl:max-w-[60%]")
      div(
        :style="selfCardStyle"
        class="relative mx-auto px-4 pt-6 max-w-xs min-w-max shadow-lg bg-orange-50 dark:text-slate-600 text-center rounded-lg  overflow-hidden md:flex-1"
      )
        img(src="@/assets/img/self.jpg" class="mx-auto rounded-full w-28 h-28 object-cover object-center")
        div(class="my-4 pb-4 border-b-2 border-sky-500")
          h1(class="font-semibold text-2xl") {{ $t('text.姓名') }}
          p(class="mt-1 font-medium text-sm") {{ $t('text.職業') }}
        div(class="flex justify-center items-center")
          router-link(:to="{ name: 'projects' }" class="no-hover")
            button(class="btn-block text-white bg-sky-500 border-sky-500") {{ $t('projects') }}
          router-link(:to="{ name: 'contact' }" class="no-hover")
            button(class="btn-block border-slate-600") {{ $t('contact') }}
        div(class="mt-6 h-12")
          div(class="absolute inset-x-0 bottom-0 flex justify-center items-center w-full h-12 bg-white dark:bg-orange-100")
            a(
              v-for="community in CONTACT_LIST.community"
              :key="community.name"
              :href="community.href"
              target="_blank"
              class="mx-3"
            )
              fontawesome-icon(v-if="community.icon" :icon="community.icon" class="w-6 h-6 dark:text-slate-600 dark:hover:text-sky-500")
      div(class="py-6 overflow-hidden md:flex-1 md:ml-6")
        p(class="text-center md:text-left text-3xl md:text-5xl font-semibold animate-bounce text-sky-500") Hello!
        p(class="mt-3 md:text-lg animate-fade-right animate-duration-700") {{ $t('text.工作自介') }}
        p(class="mt-3 md:text-lg animate-fade-right animate-duration-700 animate-delay-300") {{ $t('text.攝影自介') }}
  skill-comp
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useParallax } from '@vueuse/core'
import { CONTACT_LIST } from '@/configs/constant'
import { FontawesomeIcon } from '@/components'
import SkillComp from './skill.vue'

const selfCardStyle = computed(() => ({
  transition: '.3s ease-out all',
  transform: `rotateX(${roll.value * 10}deg) rotateY(${tilt.value * 10}deg)`
}))

const selfCard = ref(null)
const { tilt, roll } = useParallax(selfCard)
</script>

<style scoped lang="scss">
</style>

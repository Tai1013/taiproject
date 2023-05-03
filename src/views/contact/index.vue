<template lang="pug">
.contact-content
  div(class="relative flex justify-center items-center h-40 md:h-60 overflow-hidden dark:text-slate-600")
    div(class="absolute w-full h-full top-0 left-2 bg-orange-100 after:absolute after:right-1/2 after:w-1/2 after:h-full after:bg-white after:dark:bg-slate-900 after:-translate-x-16 md:after:-translate-x-24 before:absolute before:right-1/2 before:w-40 before:h-40 md:before:w-60 md:before:h-60 before:bg-sky-500 before:rotate-z-45 before:translate-x-12 md:before:translate-x-16 before:rounded-3xl")
      div(class="absolute top-1/2 right-1/2 w-40 h-40 md:w-60 md:h-60 -translate-y-1/2 rotate-z-45 bg-white dark:bg-slate-900 overflow-hidden z-10")
        div(class="absolute -right-3 -top-3 w-24 h-24 md:w-32 md:h-32 border-2 border-sky-500 rounded-xl")
        div(class="absolute -right-5 -top-5 w-28 h-28 md:w-36 md:h-36 border-2 border-sky-500 rounded-2xl")
    div(class="relative w-24 h-24 md:w-32 md:h-32 bg-orange-100 rotate-45 z-10 rounded-lg shadow")
      div(class="w-full h-full flex justify-center items-center -rotate-45")
        div(class="text-center")
          academic-cap-icon(class="no-hover mx-auto mb-1 w-8 h-8 md:w-12 md:h-12")
          p(class="text-sm md:text-lg font-medium uppercase") {{ $t('contact') }}
  div(class="my-6 container")
    h2(class="mb-2 md:mb-6 text-center text-xl font-semibold capitalize") {{ $t('contact detail') }}
    div(class="md:flex justify-center items-center text-sm")
      div(class="py-4 md:py-6 flex-1 text-center")
        DevicePhoneMobileIcon(class="no-hover mx-auto w-12 h-12 text-gray-300 animate-fade-down")
        p(class="my-2 uppercase font-semibold animate-fade animate-duration-500") phone
        ul
          li(
            v-for="(item, index) in CONTACT_LIST.phone"
            :key="item"
            :class="`animate-fade animate-duration-500 animate-delay-${100 * (index + 1)}`"
          ) {{ item }}
      div(class="py-4 md:py-6 flex-1 text-center border-y-2 md:border-y-0 md:border-x-2")
        EnvelopeIcon(class="no-hover mx-auto w-12 h-12 text-gray-300 animate-fade-down")
        p(class="my-2 uppercase font-semibold animate-fade animate-duration-500") email
        ul
          li(
            v-for="(item, index) in CONTACT_LIST.email"
            :key="item"
            :class="`animate-fade animate-duration-500 animate-delay-${100 * (index + 1)}`"
          ) {{ item }}
      div(class="py-4 md:py-6 flex-1 text-center")
        CameraIcon(class="no-hover mx-auto w-12 h-12 text-gray-300 animate-fade-down")
        p(class="my-2 uppercase font-semibold animate-fade animate-duration-500") photography
        ul
          li(
            v-for="(item, index) in CONTACT_LIST.photography"
            :key="item"
            :class="`animate-fade animate-duration-500 animate-delay-${100 * (index + 1)}`"
          ) {{ item }}

    h2(class="m-6 md:mt-10 text-center text-xl font-semibold capitalize") {{ $t('contact me') }}
    contact-form
</template>

<script setup lang="ts">
import { AcademicCapIcon, DevicePhoneMobileIcon, EnvelopeIcon, CameraIcon } from '@heroicons/vue/24/outline'
import { CONTACT_LIST } from '@/configs/constant'
import ContactForm from './form.vue'
</script>

<style scoped lang="scss">
</style>

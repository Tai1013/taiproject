<template lang="pug">
.footer-content(class="mt-6 shadow-lg")
  div(class="container py-2 flex justify-center items-center border-b-2 border-sky-500")
    div(class="inline-flex flex-auto")
      router-link(
        v-for="(menu, index) in MENU_LIST"
        :key="menu.title"
        :to="{ name: menu.name, hash: menu.hash }"
        class="mr-2 text-xs md:text-sm capitalize"
      ) {{ $t(menu.title) }}
    div(class="inline-flex")
      a(
        v-for="community in CONTACT_LIST.community"
        :key="community.name"
        :href="community.href"
        target="_blank"
        class="ml-2"
      )
        fontawesome-icon(v-if="community.icon" :icon="community.icon" class="w-4 h-4 md:w-5 md:h-5")
  footer(class="py-2 w-full text-center text-xs")
    span ©️ Copyright
    span(class="mx-2") 2023
    router-link(:to="{ name: 'home' }") {{ logoName }}
    span(class="mx-2") v{{ version }}
</template>

<script setup lang="ts">
import { MENU_LIST, CONTACT_LIST } from '@/configs/constant'
import { FontawesomeIcon } from '@/components'

const logoName = import.meta.env.VITE_APP_TITLE
const version = import.meta.env.VITE_APP_VERSION
</script>

<style scoped lang="scss">
</style>

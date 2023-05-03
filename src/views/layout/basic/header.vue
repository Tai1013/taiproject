<template lang="pug">
.header-content(ref="headerRef")
  header(
    class="fixed top-0 inset-x-0 z-40 h-12 transition duration-500"
    :class="{'bg-white/90 dark:bg-black/80': windowY > 0}"
  )
    div(class="container h-full flex justify-between items-center")
      router-link(
        :to="{ name: 'home' }"
        class="flex items-center"
        @click="isMenu = false"
      )
        img(src="@/assets/img/logo.png" class="mr-2 w-8")
        span(class="text-lg font-medium") {{ logoName }}
      div(class="flex items-center")
        .desktop-menu(class="hidden md:block")
          router-link(
            v-for="(menu, index) in MENU_LIST"
            :key="menu.title"
            :to="{ name: menu.name, hash: menu.hash }"
            class="ml-6 text-sm capitalize animate-fade-down animate-duration-500"
            :class="`animate-delay-${100 * index}`"
          ) {{ $t(menu.title) }}
        LanguageDropdown(class="ml-3 md:ml-6 w-5 h-5 text-sm")
        button(class="ml-3 md:ml-6 w-5 h-5 md:hidden" @click="isMenu = !isMenu")
          Bars3Icon(v-if="!isMenu")
          XMarkIcon(v-else)
  TransitionRoot(:show="isMenu")
    .mobile-memu(class="fixed inset-0 z-30 pt-12 bg-orange-50/95 dark:bg-slate-900/95 md:hidden")
      div(v-for="(menu, index) in MENU_LIST" :key="menu.title")
        TransitionChild(
          :enter="`transform transition delay-${index * 100}`"
          enter-from="opacity-0 -translate-x-4"
          enter-to="opacity-100 translate-x-0"
          leave="transition duration-400"
          leave-from="opacity-100"
          leave-to="opacity-0"
        )
          router-link(
            :to="{ name: menu.name, hash: menu.hash }"
            class="block text-center py-3 border-t text-xs sm:text-sm capitalize"
            @click="isMenu = false"
          ) {{ $t(menu.title) }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { MENU_LIST } from '@/configs/constant'
import { LanguageDropdown } from '@/components'

const { y: windowY } = useScroll(window)

const logoName = import.meta.env.VITE_APP_TITLE
const isMenu = ref(false)
</script>

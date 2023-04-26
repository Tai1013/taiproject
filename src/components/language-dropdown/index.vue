<template lang="pug">
Menu(as="div" v-bind="$attrs" class="language-dropdown relative")
  MenuButton(class="w-full")
    LanguageIcon(class="w-full")
  transition(
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  )
    MenuItems(class="absolute right-0 mt-2 min-w-[120px] origin-top-right bg-white rounded-md shadow overflow-hidden")
      MenuItem(
        v-slot="{ active, disabled }"
        v-for="locale in LOCALE_LIST"
        :key="locale.name"
        :disabled="language === locale.name"
      )
        button(
          class="no-hover p-2 flex items-center w-full text-left border-b last:border-b-0"
          :class="[{ 'bg-sky-500 hover:text-white': active }, { 'cursor-not-allowed bg-sky-200 opacity-50': disabled }]"
          @click="changeLanguage(locale.name)"
        )
          img(:src="locale.flag" class="mr-1 w-4 h-4 rounded-full object-cover")
          span(class="text-xs") {{ $t(`locale.${locale.name}`) }}
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { LanguageIcon } from '@heroicons/vue/24/solid'
import { LOCALE_LIST, useLanguage } from '@/i18n'

const { language, changeLanguage } = useLanguage()
</script>

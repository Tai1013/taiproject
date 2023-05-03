<template lang="pug">
.projects-content
  div(class="relative flex justify-center items-center h-40 md:h-60 overflow-hidden dark:text-slate-600")
    div(class="absolute w-full h-full top-0 left-2 bg-orange-100 after:absolute after:right-1/2 after:w-1/2 after:h-full after:bg-white after:dark:bg-slate-900 after:-translate-x-16 md:after:-translate-x-24 before:absolute before:right-1/2 before:w-40 before:h-40 md:before:w-60 md:before:h-60 before:bg-sky-500 before:rotate-z-45 before:translate-x-12 md:before:translate-x-16 before:rounded-3xl")
      div(class="absolute top-1/2 right-1/2 w-40 h-40 md:w-60 md:h-60 -translate-y-1/2 rotate-z-45 bg-white dark:bg-slate-900 overflow-hidden z-10")
        div(class="absolute -right-3 -top-3 w-24 h-24 md:w-32 md:h-32 border-2 border-sky-500 rounded-xl")
        div(class="absolute -right-5 -top-5 w-28 h-28 md:w-36 md:h-36 border-2 border-sky-500 rounded-2xl")
    div(class="relative w-24 h-24 md:w-32 md:h-32 bg-orange-100 rotate-45 z-10 rounded-lg shadow")
      div(class="w-full h-full flex justify-center items-center -rotate-45")
        div(class="text-center")
          swatch-icon(class="no-hover mx-auto mb-1 w-8 h-8 md:w-12 md:h-12")
          p(class="text-sm md:text-lg font-medium uppercase") {{ $t('projects') }}
  div(class="py-4 md:py-6 container dark:text-slate-900")
    div(class="p-4 w-full bg-orange-100 rounded-lg min-w-min shadow-lg overflow-hidden")
      div(class="-m-2 flex flex-wrap")
        div(
          v-for="(project, index) in PROJECTS_LIST"
          :key="project.name"
          class="p-2 min-w-min basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 overflow-hidden"
        )
          div(
            class="p-4 relative bg-orange-50 shadow-md rounded-md overflow-hidden md:h-full before:absolute before:w-full before:h-1/4 before:top-1/2 before:left-0 before:-translate-y-1/2 before:rotate-12 before:scale-125 before:bg-orange-100/50 before:shadow-inner"
            data-aos="fade-down"
            :data-aos-delay="index * 100"
          )
            div(class="relative")
              div(class="mx-auto flex justify-center items-center w-48 h-48 bg-white shadow-inner shadow-black/10 rounded-full -translate-y-12 overflow-hidden")
                splide-carousel(:slides="project.image" type="fade" :drag="false")
                  template(#[imageIndex] v-for="(image, imageIndex) in project.image" :key="image")
                    img(:src="pathFile(image)" class="w-full h-full object-cover")
              div(class="border-b-2 border-sky-500 -mt-8 mb-4 pb-4")
                p(class="mb-1 text-center font-semibold capitalize") {{ $t(`project.${project.name}`) }}
                div(class="text-center text-xs uppercase") {{ project.subject }}
              div(class="flex flex-wrap -my-1")
                brands-svg(
                  class="m-1 py-1 px-2 bg-orange-200 rounded shadow"
                  v-for="(brand, brandIndex) in project.brands"
                  :key="brand.name"
                  :svg="brand.icon"
                  :name="brand.name"
                  data-aos="fade"
                  :data-aos-delay="brandIndex * 100"
                )
              a(class="mt-4 w-full" :href="project.href" target="_blank")
                button(class="btn-block w-full text-white bg-sky-500 border-sky-500") {{ $t('demo') }}
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { pathFile } from '@/helper'
import { SplideCarousel, BrandsSvg } from '@/components'
import { PROJECTS_LIST } from '@/configs/constant'
import { SwatchIcon } from '@heroicons/vue/24/outline'

const projects = reactive([
  {
    id: 1,
    image: '',
    name: ''
  }
])

</script>

<style scoped lang="scss">
</style>

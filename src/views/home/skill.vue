<template lang="pug">
div(id="skill" class="relative overflow-hidden dark:text-slate-600")
  div(class="py-4 md:py-6 container")
    div(class="p-4 w-full bg-orange-100 rounded-lg min-w-min shadow-lg overflow-hidden")
      div(class="-m-2 flex flex-wrap")
        div(
          v-for="(skill, index) in SKILL_LIST"
          :key="skill.name"
          class="p-2 min-w-min basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 overflow-hidden"
        )
          div(
            class="p-4 relative bg-orange-50 shadow-md rounded-md overflow-hidden md:h-full before:absolute before:w-full before:h-1/4 before:top-1/2 before:left-0 before:-translate-y-1/2 before:rotate-12 before:scale-125 before:bg-orange-100/50 before:shadow-inner"
            data-aos="fade-down"
            :data-aos-delay="index * 100"
          )
            div(class="relative")
              div(class="mx-auto flex justify-center items-center w-48 h-48 bg-white shadow-inner shadow-black/10 rounded-full -translate-y-12 overflow-hidden")
                splide-carousel(:slides="skill.icons" type="fade" :drag="false")
                  template(#[iconIndex] v-for="(icon, iconIndex) in skill.icons" :key="icon")
                    brands-svg(
                      class="translate-y-2"
                      svg-class="w-20 h-20"
                      :svg="icon"
                    )
              p(class="relative text-center font-semibold capitalize -mt-8 mb-4 pb-4 border-b-2 border-sky-500") {{ $t(skill.name) }}
              div(class="flex flex-wrap -my-1")
                  brands-svg(
                    class="m-1 py-1 px-2 bg-orange-200 rounded shadow"
                    v-for="(brand, brandIndex) in skill.brands"
                    :key="brand.name"
                    :svg="brand.icon"
                    :name="brand.name"
                    data-aos="fade"
                    :data-aos-delay="brandIndex * 100"
                  )
              ul(class="relative mt-4 ml-6 list-disc")
                li(
                  v-for="(list, listIndex) in skill.list"
                  :key="list"
                  data-aos="fade-left"
                  :data-aos-delay="listIndex * 100"
                ) {{ list }}
</template>

<script setup lang="ts">
import { SplideCarousel, BrandsSvg } from '@/components'
import { SKILL_LIST } from '@/configs/constant'
</script>

<template lang="pug">
form(@submit.prevent="submit")
  div(class="mb-2")
    div(class="mb-1.5 flex items-center")
      span(class="text-red-500 leading-5") *
      label(for="form-name" class="text-sm font-medium") {{ $t('name') }}
    input(
      v-model="contactForm.name"
      :required="isRequired"
      :disabled="isLoading"
      class="peer p-1.5 md:p-2 outline-none w-full text-sm border-b border-gray-300 dark:border-slate-700 placeholder:text-xs md:placeholder:text-sm invalid:border-red-500 invalid:text-red-500 dark:rounded-md dark:bg-slate-700"
      name="form-name"
      :placeholder="$t('name')"
    )
  div(class="mb-2")
    div(class="mb-1.5 flex items-center")
      span(class="text-red-500 leading-5") *
      label(for="form-email" class="text-sm font-medium") {{ $t('email') }}
    input(
      v-model="contactForm.email"
      :required="isRequired"
      :disabled="isLoading"
      class="peer p-1.5 md:p-2 outline-none w-full text-sm border-b border-gray-300 dark:border-slate-700 placeholder:text-xs md:placeholder:text-sm invalid:border-red-500 invalid:text-red-500 dark:rounded-md dark:bg-slate-700"
      name="form-email"
      type="email"
      :placeholder="$t('email')"
    )
  div(class="mb-2")
    div(class="mb-1 flex items-center")
      span(class="text-red-500 leading-5") *
      label(for="form-content" class="text-sm font-medium") {{ $t('content') }}
    textarea(
      v-model="contactForm.content"
      :required="isRequired"
      :disabled="isLoading"
      class="peer p-1.5 md:p-2 outline-none w-full h-24 md:h-36 text-sm border border-gray-300 dark:border-slate-700 placeholder:text-xs md:placeholder:text-sm rounded-md invalid:border-red-500 invalid:text-red-500 dark:bg-slate-700"
      name="form-content"
      :placeholder="$t('content')"
    )
  div(class="mb-2 flex justify-center")
    button(
      type="submit"
      :disabled="isLoading"
      class="btn-block w-full text-white bg-sky-500 border-sky-500 disabled:opacity-75"
    )
      div(class="flex justify-center items-center")
        sun-icon(v-if="isLoading" class="no-hover mr-1 w-4 h-4 animate-spin")
        span {{ $t('submit') }}
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { SunIcon } from '@heroicons/vue/24/outline'
import { sendEmail } from '@/server/firebase/email-server'
import { useLoading } from '@/composables'

const { load, unload, isLoading } = useLoading()
const isSendSuccess = ref(false)
const isRequired = ref(false)
const contactForm = reactive({
  name: '',
  email: '',
  content: ''
})

const submit = async () => {
  isRequired.value = true

  const state = Object.keys(contactForm).map(key => {
    if (contactForm[key] === '') return false
    return true
  })

  if (state.filter(valid => !valid).length) return

  load()
  const res = await sendEmail(contactForm)
  if (res === true) {
    isRequired.value = false
    Object.keys(contactForm).forEach(key => {
      contactForm[key] = ''
    })
  }
  unload()
}
</script>

<style scoped lang="scss">
</style>

import { i18n, locales } from './install'
import { ref } from 'vue'
import { pathFile } from '@/helper'

export const LOCALE_LIST = locales.map(locale => ({
  flag: pathFile(`@/i18n/flags/${locale}.png`),
  name: locale
}))
export const useLanguage = () => {
  const language = ref<string>(localStorage.getItem('language') ?? import.meta.env.VITE_APP_LANGUAGE)
  i18n.global.locale.value = localStorage.getItem('language') ?? import.meta.env.VITE_APP_LANGUAGE

  const changeLanguage = (locale: string) => {
    language.value = locale
    i18n.global.locale.value = locale
    localStorage.setItem('language', locale)
  }

  return {
    language,
    changeLanguage
  }
}

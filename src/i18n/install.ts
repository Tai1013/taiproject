import { Plugin } from 'vue'
import { createI18n, MessageFunctions } from 'vue-i18n'

const localePath = './locales/'
const localeFile = import.meta.glob<MessageFunctions>('./locales/*.json', { eager: true, import: 'default' })

const messages = Object.fromEntries(
  Object.entries(localeFile).map(([key, value]) => {
    return [key.slice(localePath.length, -5), value]
  })
)

export const locales = Object.keys(localeFile).map(path => path.slice(localePath.length, -5))
export const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_APP_LANGUAGE,
  fallbackLocale: 'en',
  globalInjection: true,
  messages
})

const install: Plugin = app => {
  app.use(i18n)
}

export default install

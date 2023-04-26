import './plugin/AOS'
import 'tailwindcss/tailwind.css'
import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import I18n from './i18n/install'

const app = createApp(App)
app.use(Router)
app.use(I18n)
app.mount('#app')

import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) return {
      el: to.hash,
      behavior: 'smooth'
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

export default router

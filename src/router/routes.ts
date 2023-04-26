import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/', name: 'pages', component: () => import('@/views/layout/basic/index.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('@/views/home/index.vue') },
      { path: '/projects', name: 'projects', component: () => import('@/views/projects/index.vue') },
      { path: '/contact', name: 'contact', component: () => import('@/views/contact/index.vue') }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

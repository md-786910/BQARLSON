import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes()
})

function getRoutes() {
  return [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/HomePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/AboutPage.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('@/components/ServicePage.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('@/components/WorkPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/ContactPage.vue')
    }
  ]
}

export default router
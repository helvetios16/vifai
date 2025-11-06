import { createRouter, createWebHistory } from 'vue-router'

import RediseñoAprendizaje from '../views/RediseñoAprendizaje.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RediseñoAprendizaje,
    },
  ],
})

export default router

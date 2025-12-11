import { createRouter, createWebHistory } from 'vue-router'

import SortLearn from '../views/SortLearn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SortLearn,
    },
  ],
})

export default router

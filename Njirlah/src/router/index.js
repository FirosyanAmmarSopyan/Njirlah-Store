import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/Index.vue'
import ShopView from '../views/Shop.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path : "/shop",
      name : 'shop',
      component : ShopView
    }
  ]
})

export default router

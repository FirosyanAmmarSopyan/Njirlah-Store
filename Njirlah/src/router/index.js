import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/Index.vue";
import ShopView from "../views/Shop.vue";
import DetailView from "../views/DetailShop.vue";
import GameChecker from '../views/GameChecker.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
      children : [
        {
          path: "/service/:id",
          name  : 'service',
          component: DetailView,
        },
      ]
    },
    {
      path : '/game-checker',
      name : 'game-checker',
      component : GameChecker
    }
  
  ],
});

export default router;

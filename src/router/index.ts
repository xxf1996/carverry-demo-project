import { createRouter, createWebHistory } from "vue-router";
import { addCarverryRoute } from '@carverry/helper';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: () => import('@/views/home/index.vue')
    }
  ]
});

if (import.meta.env.MODE === 'development') { // 仅需要在开发环境引入
  addCarverryRoute(router);
}

export default router;

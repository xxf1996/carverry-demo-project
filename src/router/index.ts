import { createRouter, createWebHistory } from "vue-router";
import { addCarverryRoute } from '@carverry/helper';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: () => import('@/views/home/index.vue')
    },
    {
      name: 'SimplePage',
      path: '/simple-page',
      component: () => import('@/blocks/simple-page')
    }
  ]
});

if (import.meta.env.MODE === 'development') { // 仅需要在开发环境引入
  addCarverryRoute(router);
}

export default router;

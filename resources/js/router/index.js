import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',
          name: 'home',
          component: () => import('../pages/home.vue')
        },
        { path: '/about',
          name: 'about',
          component: () => import('../pages/about.vue')
        },
    ]
})
  
export default router
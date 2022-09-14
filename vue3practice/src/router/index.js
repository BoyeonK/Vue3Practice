import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPageView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import helpView from '../views/helpView.vue'
import AboutView from '@/views/AboutView.vue'
import ConsulServe from '@/views/ConsulServe.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Consul',
    name: 'consul',
    component: ConsulServe
  },
  {
    path: '/help',
    name: 'help',
    component: helpView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

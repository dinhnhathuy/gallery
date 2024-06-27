import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/HomePage.vue'
import Layout2 from './views/Layout2.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/layout2', component: Layout2 },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
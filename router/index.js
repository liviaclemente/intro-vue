import { createRouter, createWebHistory } from 'vue-router'
import Exemplo01 from '../src/components/Exemplo01Interpolacao.vue'
import Exemplo02 from '../src/components/Exemplo02Interpolacao.vue'

const routes = [
  { path: '/exemplo1', component: Exemplo01},
  { path: '/exemplo2', component: Exemplo02 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


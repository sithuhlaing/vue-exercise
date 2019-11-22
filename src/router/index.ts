import Vue from 'vue'
import VueRouter from 'vue-router'
import Ex1 from '../views/Exercise1.vue'
import Ex2 from '../views/Exercise2.vue'
import Ex3 from '../views/Exercise3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ex1',
    name: 'ex1',
    component: Ex1
  },
  {
    path: '/ex2',
    name: 'ex2',
    component: Ex2
  },
  {
    path: '/ex3',
    name: 'ex3',
    component: Ex3
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Ex1 from '../views/Exercise1.vue'
import Ex2 from '../views/Exercise2.vue'
import Ex3 from '../views/Exercise3.vue'
import Ex4 from '../views/Exercise4.vue'
import Ex5 from '../views/Exercise5.vue'
import Ex6 from '../views/Exercise6.vue'
import Ex7 from '../views/Exercise7.vue'

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
    path: '/ex4',
    name: 'ex4',
    component: Ex4
  },
  {
    path: '/ex5',
    name: 'ex5',
    component: Ex5
  },
  {
    path: '/ex6',
    name: 'ex6',
    component: Ex6
  },
  {
    path: '/ex7',
    name: 'ex7',
    component: Ex7
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

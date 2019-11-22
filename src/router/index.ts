import Vue from 'vue'
import VueRouter from 'vue-router'
import Ex1 from '../views/Exercise1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ex1',
    name: 'ex1',
    component: Ex1
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

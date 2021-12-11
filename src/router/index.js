import { createRouter, createWebHashHistory } from 'vue-router'
//import Home from '../views/Home.vue'

import hotelRouter from '../modules/hotel/router'
import isAuthenticatedGuard from '../modules/hotel/router/auth-guard'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/modules/hotel/layouts/HomeLayout.vue')

  },
  {
    path: '/login',
    ...hotelRouter
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '@/modules/hotel/layouts/RegisterLayout.vue')

  },
  {
    path: '/roomSelect',
    name: 'roomSelect',
    component: () => import(/* webpackChunkName: "RoomSelect" */ '@/modules/hotel/layouts/RoomSelectLayout.vue'),
    beforeEnter: [ isAuthenticatedGuard ], //implementado para dejar pasar al room select
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

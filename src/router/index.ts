 import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import LoginView from '@/views/LoginView/LoginView.vue'
import Register from '@/views/RegisterView/RegisterView.vue'
import HomeView from '@/views/HomeView.vue'

import OrderDetailView from '@/components/OrderDetailView/OrderDetailView.vue'
import SuccessfulPickUpView from '@/components/SuccessfulPickUp/SuccessfulPickUpView.vue'
import DeliveryFailView from '@/components/DeliveryFailView/DeliveryFailView.vue'

import CartBZIView from '@/views/CartBZIView/CartBZIView.vue'
// Tối ưu


const authenticated = localStorage.getItem("user")

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/quan-ly-order',
    name: 'order',
    component: HomeView,
  },
  {
    path: '/quan-ly-order/:id',
    name: 'detail-order',
    component: OrderDetailView,
  },
  {
    path: '/quan-ly-order/:id/successful-pick-up',
    name: 'successful-pick-up',
    component: SuccessfulPickUpView,
  },
  {
    path: '/quan-ly-order/:id/delivery-fail',
    name: 'delivery-fail',
    component: DeliveryFailView,
  },
  {
    path: '/quan-ly-vi-BZI',
    name: 'cart-BZI',
    component: CartBZIView,
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !authenticated) next({ name: 'login' })
  else if (to.name === 'login' && authenticated) next ({ path: "/quan-ly-order" })
  else next()
})

export default router

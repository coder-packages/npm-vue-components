import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import HomePage from '@/pages/HomePage'
import SigninPage from '@/pages/SigninPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ModalPage from '@/pages/ModalPage'
import ProfilePage from '@/pages/ProfilePage'

import middlewaresInComponents from 'coder-vue-component-middleware'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninPage
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]
})

middlewaresInComponents({router, store})
export default router

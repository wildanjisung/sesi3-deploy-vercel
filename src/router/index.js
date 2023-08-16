import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'
import DefaultView from '../views/DefaultView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import UserView from '../views/UserView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'
import PokemonView from '../views/PokemonView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/setting',
        name: 'setting',
        component: DefaultView,
        children: [
          {
            path: '',
            name: 'setting',
            component: SettingView,
          },
          {
            path: 'privacy',
            name: 'privacy',
            component: PrivacyView,
          },
        ]
      },
      {
        path: '/user',
        name: 'user',
        component: DefaultView,
        children: [
          {
            path: '',
            name: 'user',
            component: UserView,
          },
          {
            path: ':id',
            name: 'userDetail',
            component: UserDetailView,
          },
        ]
      },
      {
        path: '/pokemon',
        name: 'pokemon',
        component: PokemonView
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

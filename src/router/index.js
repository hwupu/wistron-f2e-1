import { createRouter, createWebHistory } from 'vue-router'
import ListPage from '../views/ListPage.vue'

const routes = [
  {
    path: '/',
    name: 'ListPage',
    component: ListPage
  },
  {
    path: '/setting',
    name: 'Setting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Setting.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

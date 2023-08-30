/* eslint-disable no-undef */
import Main from '../pages/MainPage.vue'
import PostsPage from '../pages/PostsPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
}
)

export default router
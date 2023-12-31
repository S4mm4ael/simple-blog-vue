/* eslint-disable no-undef */
import Main from '../pages/MainPage.vue'
import PostsPage from '../pages/PostsPage.vue'
import PostsPageWithGlobal from '../pages/PostsPageWithGlobal.vue'
import AboutPage from '../pages/AboutPage.vue'
import PostIdPage from '../pages/PostIdPage.vue'
import PostsPageComposition from '../pages/PostsPageComposition.vue'
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
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },
  {
    path: '/posts-global',
    component: PostsPageWithGlobal
  },
  {
    path: '/posts-composition',
    component: PostsPageComposition
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
}
)

export default router
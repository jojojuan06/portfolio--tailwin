import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyProjects from '../views/MyProjectsView.vue'
import MonCv from '../views/MonCvView.vue'
import Contact from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/MyProjects',
      name: 'myprojects',
      component:MyProjects
    },
    {
      path: '/MonCv',
      name: 'moncv',
      component: MonCv
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact
    },
  ]
})

export default router

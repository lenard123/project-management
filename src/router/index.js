import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Dashboard.vue"
import Project from "../views/Project.vue"
import Team from "../views/Team.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'project',
      component: Project
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    }
  ]
})

export default router

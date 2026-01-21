import DasboardLayout from '@/layouts/DasboardLayout.vue'
import Login from '@/views/auths/Login.vue'
import Dashboard from '@/views/pages/dashboard/dashboard.vue'
import UserDiretory from '@/views/pages/usersDiretory/User-Diretory.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Login', component: Login },
    {
      path: '/', redirect: '/dashboard', name: 'Dasboard', component: DasboardLayout,
      children: [
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
        { path: '/user', name: 'UserDiretory', component: UserDiretory}

      ]
    },


  ],
})

export default router

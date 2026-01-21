import { createRouter, createWebHistory } from 'vue-router'
import DasboardLayout from '@/layouts/DasboardLayout.vue'
import Login from '@/views/auths/Login.vue'
import Dashboard from '@/views/pages/dashboard/dashboard.vue'
import UserDiretory from '@/views/pages/usersDiretory/User-Diretory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path : '/', redirect: 'login'},
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        title: 'login'
      }
    },
    {
      path : '/',
      redirect: '/dashboard',
      component: DasboardLayout,
      children:[
        { path: 'dashboard', name: 'Dashboard', component: Dashboard, meta: {title: 'dashboard'},},
        { path: 'users', 
          name: 'UserDiretory',
          component: UserDiretory, 
          meta: {title: 'users'},
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
// router.beforeEach((to, form, next) => {
//   document.title = to.meta.title ? `${to.meta.title} | Todo-List` : 'Todo-List';
//   let token =localStorage.getItem('token');
//   if(!token && to.name !== 'Login'){
//     next  ({name: 'Login'});
//   }else if(token && to.name === 'Login'){
//      next  ({name: 'Dashboard'});
//   }else{
//     next();
//   }
// })

export default router

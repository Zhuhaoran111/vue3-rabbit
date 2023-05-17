import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
//createRouter：创建路由实例
//createWebHistory：创建history模式的路由

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和components
  routes: [
     {
      path:'/',
      component:Layout,
      children:[
         {
          path:'', //默认页(访问/的时候默认Home页也要渲染)
          component:Home
         },
         {
          path:'category/:id', 
          component:Category
         }
      ]
     },
     {
       path:'/login',
       component:Login
     }
  ]
})

export default router

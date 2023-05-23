import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import cartList from '@/views/cartList/index.vue'
import checkout from '@/views/checkout/index.vue'
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
         },
         {
          path:'category/sub/:id', 
          component:subCategory
         },
         {
          path:'detail/:id', 
          component:Detail
         },
         {
          path:'cartList', 
          component:cartList
        },
        {
          path: 'checkout',
          component: checkout
        }
      ]
     },
     {
       path:'/login',
       component:Login
     }
  ],
  //路由行为的配置项----滚动滚动条时，选择其他分类会重新回到顶部
  scrollBehavior(){
    return {top:0}
  }
})

export default router

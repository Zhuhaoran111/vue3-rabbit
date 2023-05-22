//管理用户数据相关
import {defineStore} from 'pinia'
import {ref} from 'vue'
import { loginApi } from '@/api/user'
import { useCartStore } from './cartStore' //引入pinia里面的函数
import {mergeCartList} from '@/api/cart'

export const useUserStore=defineStore('user',()=>{
    const cartStore=useCartStore()  //创建实例
    //1.定义管理用户数据的state
    const userInfo=ref({})
    //2.定义获取接口数据的action函数
    const getUserInfo=async ({account,password})=>{
      const res=await  loginApi({account,password})
      userInfo.value=res.result
      //合登录时合并购物车信息map数组的用法(进行映射)
      const res2=await mergeCartList(cartStore.cartList.map((item)=>{
           return{
               skuId:item.skuId,
               selected:item.selected,
               count:item.count
           }
      }))
      cartStore.getNewCartList()   //获取最新的购物车数据列表，这个方法已在cartStore中封装

    }

    //退出登录时清除用户信息
    const clearUserInfo=()=>{
        userInfo.value={}
        //退出登录时清除购物车信息
        cartStore.clearCart()
    }

    //3.以对象格式把state和action  return出去
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true
})
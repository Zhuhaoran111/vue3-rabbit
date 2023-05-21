//管理用户数据相关
import {defineStore} from 'pinia'
import {ref} from 'vue'
import { loginApi } from '@/api/user'

export const useUserStore=defineStore('user',()=>{
    //1.定义管理用户数据的state
    const userInfo=ref({})
    //2.定义获取接口数据的action函数
    const getUserInfo=async ({account,password})=>{
      const res=await  loginApi({account,password})
      userInfo.value=res.result
      console.log(userInfo.value)
    }

    //退出登录时清除用户信息
    const clearUserInfo=()=>{
        userInfo.value={}
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
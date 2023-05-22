//封装购物车模块
import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useCartStore = defineStore('cart', () => {
        //1.定义state---cartList
    const cartList = ref([])
       //定义action----addCart
    const addCart = (goods) => {
         //添加购物车操作
        
        //已添加过count+1
        //没有添加过直接push
        //通过匹配传递过来的商品对象中skuId能不能在cartList中找到，找到就表示添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        //如果item存在表示已经找到
        if (item) {
            console.log(item)
           //疑问：这里count++为什么会影响cartList里面的?????????????????????????????????????????????????????
            item.count++
            console.log(cartList.value.count)
        } else {
            cartList.value.push(goods)
        }
        
    }
   
     //删除购物车
    const deleteCart = (skuId) => {
        //思路：1.找到要删除的下标值--splice
        //思路2：使用数组的过滤方法--filter
        //findIndex是找出数组中的元素的下标
        //splice(要删除的下标值,删除元素的个数)
        //1.利用splice方法删除元素
        // const index = cartList.value.findIndex((item) => skuId === item.skuId)
        // cartList.value(index, 1)
        
        //2.利用filter删除元素(把符条件的筛选出来)
        cartList.value = cartList.value.filter((item) => skuId !== item.skuId)

    }

    return {
        cartList,
        addCart,
        deleteCart
    }
}, {
    persist: true
 })

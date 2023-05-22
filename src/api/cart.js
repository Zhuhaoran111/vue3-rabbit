//封装购物车模块接口
import httpInstance from "@/utils/http";

//接入购物车人
export const insertCart=({skuId,count})=>{
    return httpInstance({
        url:'/member/cart',
        method:'POST',
        data:{
            skuId,
            count
        }
    })
}

//获取最新的购物车列表
export const getCartList=()=>{
    return httpInstance({
        url:'/member/cart',
    })
}

//获取最新的购物车列表  ids是数组
export const deleteCartData=(ids)=>{
    return httpInstance({
        url:'/member/cart',
        method:'DELETE',
        data:{
            ids
        }
    })
}

//合并购物车
export const mergeCartList=(data)=>{
    return httpInstance({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}
import httpInstance from "@/utils/http";

//获取轮播图数据
export function getBannerApi(){
   return httpInstance({
        url:'/home/banner'
   })
}

//获取新鲜好物
export function getNewData(){
    return httpInstance({
        url:'/home/new'
    })
}

//获得人气推荐的
export function getHotRecommend(){
    return httpInstance({
        url:'/home/hot'
    })
}

//产品列表
export function getProductList(){
    return httpInstance({
        url:'/home/goods'
    })
}
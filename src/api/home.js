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

export function getHotRecommend(){
    return httpInstance({
        url:'/home/hot'
    })
}
import httpInstance from "@/utils/http";

//获取轮播图数据
export function getBannerApi(){
   return httpInstance({
        url:'/home/banner'
   })
}
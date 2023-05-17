import httpInstance from "@/utils/http";

export function getCategoryApi(id){
    return httpInstance({
         url:'/category',
         params:{
            id
         }
    })
 }
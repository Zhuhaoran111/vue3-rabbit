import httpInstance from "@/utils/http";

export function getCategoryApi(id){
    return httpInstance({
         url:'/category',
         params:{
            id
         }
    })
 }

 export const getCategoryFilterAPI = (id) => {
   return httpInstance({
     url:'/category/sub/filter',
     params:{
       id
     }
   })
 }
 
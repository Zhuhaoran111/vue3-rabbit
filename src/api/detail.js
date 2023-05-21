import httpInstance from "@/utils/http";

//获取商品的详情(记得要导出出去)
export const getDetail=(id)=>{
    return httpInstance({
        url:'/goods',
        params:{
            id
        }

    })
}
import httpInstance from "@/utils/http";

//个人中心中的猜你喜欢模块
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}
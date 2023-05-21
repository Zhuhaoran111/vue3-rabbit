//axios基础的封装
import axios from 'axios'
// import { ElMessage } from 'element-plus'

const httpInstance=axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',  //基准地址
    timeout:5000
})


// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))

// axios响应式拦截器(这里统一做错误提示)
httpInstance.interceptors.response.use(res => res.data, e => {
    ElMessage({
      type:'warning',
      message:e.response.data.message
    })
    return Promise.reject(e)
  })

export default httpInstance
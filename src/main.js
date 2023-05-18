

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入初始化的样式文件
import '@/styles/common.scss'

import App from './App.vue'
import router from './router'
//测试接口函数
import {getCategory} from '@/api/testApi'

//定义懒加载组件并注册
import {lazyPlugin} from '@/directives'


getCategory().then((res)=>{

})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

//注册懒加载插件
app.use(lazyPlugin)

app.mount('#app')

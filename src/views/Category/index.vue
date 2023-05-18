<script setup>
import { ref, onMounted } from 'vue'
import { getCategoryApi } from '@/api/category'
import { getBannerApi } from '@/api/home'
import { onBeforeRouteUpdate } from 'vue-router'

//引入路由
import { useRoute } from 'vue-router'

const cateGoryData = ref({})
const route = useRoute()  //获取实例
//这里的id默认要是route.params.id，传了就用最新的数据
const getCateGoryList = async (id = route.params.id) => {
    //route.params.id-----parmas就用params,query就用query
    const res = await getCategoryApi(id)
    cateGoryData.value = res.result

}
const bannerList = ref([])
//获取轮播图接口数据
const getBanner = async () => {
    const res = await getBannerApi(
        {
            distributionSite: '2'
        }
    )
    bannerList.value = res.result
}

onMounted(() => {
    getCateGoryList() //获取分类列表·
    getBanner() //获取轮播图
})

//目标：路由参数变化的时候，可以把分类数据接口重新发送
//to是目标路由对象，里面有params最新的参数
onBeforeRouteUpdate((to) => {
    //存在问题：要使用最新的路由参数请求最新的分类数据
    getCateGoryList(to.params.id)
    //把最新的路由id带过去
})


</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <!-- 这个首页可以跳转 -->
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ cateGoryData.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <!-- 轮播图 -->
            <div class="home-banner">
                <el-carousel height="500px">
                    <el-carousel-item v-for="item in bannerList" :key="item.id">
                        <img :src="item.imgUrl" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 全部分类 -->
            <div class="sub-list">
                <h3>全部分类</h3>
                <ul>
                    <li v-for="i in cateGoryData.children" :key="i.id">
                        <RouterLink to="/">
                            <img :src="i.picture" />
                            <p>{{ i.name }}</p>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <!-- 这是封装的goodsItem -->
            <div class="ref-goods" v-for="item in cateGoryData.children" :key="item.id">
                <div class="head">
                    <h3>- {{ item.name }}-</h3>
                </div>
                <div class="body">
                    <goodsItem v-for="goods in item.goods" :goods="goods" :key="goods.id"></goodsItem>
                </div>
            </div>




        </div>
    </div>
</template>


<style scoped lang="scss">
.home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;
    left: 0;
    top: 0;


    img {
        width: 100%;
        height: 500px;
    }
}

.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;

                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}
</style>
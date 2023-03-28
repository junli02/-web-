// history模式
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'


import MyContent from "@/components/MyContent.vue";
import MyContent1 from "@/components/MyContent1.vue";

const routes = [
// 路由的默认路径
    {
        path: '/MyContent',
        component: MyContent
    },
    {
        path: '/MyContent1',
        component: MyContent1
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;

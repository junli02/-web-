// history模式
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'


import MyContent from "@/components/MyContent.vue";
import MyContent1 from "@/components/MyContent1.vue";
import MyContent11 from "@/components/page/MyContent11.vue";
import MyContent12 from "@/components/page/MyContent12.vue";
import MyContent21 from "@/components/page/MyContent21.vue";
import MyContent22 from "@/components/page/MyContent22.vue";
import MyContent41 from "@/components/page/MyContent41.vue";
import MyContent42 from "@/components/page/MyContent42.vue";

const routes = [
// 路由的默认路径
    {
        path: '/',
        component: MyContent,
        mode:'hash',

    },
    {
        path: '/MyContent',
        component: MyContent,
        mode:'hash',

    },
    {
        path: '/MyContent1',
        component: MyContent1,
        mode:'hash',

    },
    {
        path: '/MyContent11',
        component: MyContent11,
        mode:'hash',
    },
    {
        path: '/MyContent12',
        component: MyContent12,
        mode:'hash',
    },
    {
        path: '/MyContent21',
        component: MyContent21,
        mode:'hash',
    },
    {
        path: '/MyContent22',
        component: MyContent22,
        mode:'hash',
    },
    {
        path: '/MyContent41',
        component: MyContent41,
        mode:'hash',
    },
    {
        path: '/MyContent42',
        component: MyContent42,
        mode:'hash',
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;

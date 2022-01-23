//配置路由的地方
import Vue from 'vue'
import VueRouter from "vue-router";
//使用组件
Vue.use(VueRouter);

import Home from '@/views/Home/home'
import Login from '@/views/Login/login'
import Regist from '@/views/Regist/regist'
import Search from '@/views/Search/search'
//配置路由
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:true}
        },
        {
            path:"/regist",
            component:Regist,
            meta:{show:false}
        },
        {
            path:"/search",
            component:Search,
            meta:{show:false}
        },
        //重定向，默认跳转首页
        {
            path:"*",
            redirect:"/home"
        }
    ]
})
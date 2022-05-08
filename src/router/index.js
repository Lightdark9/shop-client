//配置路由的地方
import Vue from 'vue'
import VueRouter from "vue-router";
//使用组件
Vue.use(VueRouter);

import Home from '@/views/Home/home'
import Login from '@/views/Login/login'
import Regist from '@/views/Regist/regist'
import Search from '@/views/Search/search'
import TypeNav from '@/views/Home/TypeNav/TypeNav'

//三级联动导航栏注册全局组件：Vue.component(组件name，组件)
Vue.component(TypeNav.name,TypeNav)


/**
 * 重写push，处理跳转NavigationDuplicated警告错误
 */
//先把VueRouter的原型对象push()保存一份
let originPush = VueRouter.prototype.push;
/**
 * 重写push | replace
 * 参数一：要跳转的路径
 * 参数二：调用成功返回
 * 参数三：调用失败返回
 */
VueRouter.prototype.push = function (location,resolve,reject) {
    if (resolve && reject){
        //call | apply :都可以调用函数一次，都可以篡改函数上下文一次
        //call用都好隔开，apply传递数组
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
/**
 * 不可以的
 */


/**git改过的东西
*/


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
            path:"/search/:keyword?",
            component:Search,
            meta:{show:false},
            name:"search",
            //函数式穿参，可传递params，query，传给路由组件
            props:($route)=>{
                return{keyword:$route.params.keyword,
                       k:$route.query.keyword}
            }
        },
        //重定向，默认跳转首页
        {
            path:"*",
            redirect:"/home"
        }
    ]
})

import VueRouter from 'vue-router'
import account from './main/Account.vue'//导入account组件
import goodslist from './main/goodslist.vue'//导入goodslist组件
import login from './subcom/login.vue'//导入Account的login子组件
import register from './subcom/register.vue'//导入Account的register子组件

//3.创建路由对象
var router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        },
        { path: '/goodslist', component: goodslist }
    ]
})

export default router//把路由对象暴漏出去
import Vue from 'vue'
import VueRouter from 'vue-router'//1.导入vue-router包
Vue.use(VueRouter)//2.手动安装VueRouter

import app from './App.vue'//导入app组件
import account from './main/Account.vue'//导入account组件
import goodslist from './main/goodslist.vue'//导入goodslist组件

//3.创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/account', component: account },
        { path: '/goodslist', component: goodslist }
    ]
})

var vm = new Vue({
    el: '#app',
    data: {
        msg: "123"
    },
    render: c => c(app),//render会把el指定的容器中，所有的内容都清空覆盖，所以不要把路由的
    //router-view 和 router-link直接写到el所控制的元素中
    router//4.将路由对象挂载到vm身上
})

//注意：App这个组件，是通过VM实例的render函数，渲染出来的，render函数如果要渲染组件，渲染出来的
//组件，只能放到 el:'#app'所指定的元素中
//Account和GoodsList组件，是通过路由匹配监听到的，所以，这两个组件，只能展示到属于路由的
//<router-view></router-view>中去
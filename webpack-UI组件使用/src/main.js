import Vue from 'vue'
import VueRouter from 'vue-router'//1.导入vue-router包
Vue.use(VueRouter)//2.手动安装VueRouter

//导入bootstrp样式,用于icon图标的使用
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

//导入MUI的样式表，用法和Bootstrap用法没有区别
import './lib/mui/css/mui.min.css'

// //导入所有的Mint-UI组件
// import MintUI from 'mint-ui'//导入Mint-UI
// import 'mint-ui/lib/style.css'//这里可以省略node_modules这一目录
// Vue.use(MintUI)//将Mint-UI安装到Vue中//把所有的组件变成全局的组件

//按需导入 Mint-UI组件
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

import app from './App.vue'//导入app组件
import router from './router.js'//导入自定义路由模块


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
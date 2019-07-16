//这是入口文件
console.log("ok")
//
// 如何在webpack构建的项目中，使用Vue进行开发
//复习 在普通网页中如何使用vue:
//1.使用script标签，引入vue的包
//2.在index页面中，创建一个id为app 的div容器
//3.通过new Vue得到一个vue实例



//在webpack中尝试使用Vue
//注意：在webpack中使用mport Vue from 'vue' 导入的Vue构造函数，功能不完善，
//只提供了runtime-only的方式，并没有提供像网页中那样的使用方式

// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'//第一种实现导入完整Vue的方式

//回顾包的查找规则：
//1.找项目根目录中有没有node_modules的文件夹
//2.在node_modules中根据包名，找对应的vue文件
//3.在vue文件夹中，找一个叫做package.json的包配置文件
//4.在package.json文件中，查找一个main属性【main属性指定了这个包在被加载时候，的入口文件】
// var login = {
//     template:'<h3>这是login组件，是使用网页中形式创建出来的组件</h3>'
// }



//1.导入login组件
import login from './login.vue'
//默认webpack无法打包.vue文件,需要安装相关的loader/;
//npm i vue-loader vue-template-compiler -D
//在配置文件中，新增loader配置项{ test:/\.vue$/, use: 'vue-loader'}
var vm = new Vue({
    el: '#app',
    data: {
        msg: "123"
    },
    // components:{
    // login
    // }
    // render: function (createElements) {//在webpack中，如果想要通过vue，把一个组件
    //     //放到页面中去展示，vm实例中的render函数可以实现
    //     return createElements(login)
    // }
    render: c => c(login)

})
//总结梳理： webpack 中如何使用vue:
//1.安装vue的包: npm run dev -s
//2.由于在webpack中，推荐使用vue这个组件模板文件定义组件，所以需要安装能解析
//这种文件的loader npm i vue-loader vue-tempalte-complier -D
//3.在main.js中，导入vue模板，import Vue from 'vue'
//4.定义一个.vue结尾的组件，其中，组件有三部分组成： tempalte script style
//5.使用import login from './login.vue' 导入这个组件
//6.创建vm实例 var vm = new vue({el:"#app",render: c=>c(login)})
//7.在页面中创建一个id为app的div元素，作为我们vm的实例要控制的区域
//补充：现版本的vue-loader 15 需要额外补充const {VueLoaderPlugin} = require('vue-loader') 
//和 new VueLoaderPlugin()

import m1,{title as t1,content} from './test.js'
console.log(m1)
console.log(t1)
console.log(content)
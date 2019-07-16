//这是main.js 是我们项目的js入口文件

//1.导入Jquery
//import *** from *** 是ES6中导入模板的方式
//由于ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
import $ from 'jquery'
// const $ = require('jquery')

//使用 import 语法，导入css样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
//注意：webpack，默认只能打包处理js类型的文件，无法处理其它的非js类型的文件；
//如果要处理非js类型的文件，我们需要手动安装一些合适的第三方 loader 加载器
//1.如果想要打包处理 css 文件，需要安装 npm i style-loader css-loader -D
//2.打开 webpack.config.js  这个配置文件，在里面新增一个配置节点，叫做 module,
//它是一个对象，在这个module对象上，有一个rules属性，这个relus属性是一个数组，存放了
//所有的第三方文件的匹配和处理规则；


//注意： webpack处理第三方文件类型的过程：
//1.首先，webpack发现，我们并没有通过命令的形式，给它指定入口和出口
//2.webpack就会去项目的根目录中，查找一个叫做'webpack.config.js'的配置文件
//3.当找到配置文件后，webpack就会去解析这个配置文件，当解析执行完配置文件后，就得到了配置文件中
//导出的配置对象
//4.当webpack拿到配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建；


$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})


//经过刚才的演示，webpack可以做什么事情？？？
//1.webpack能够处理js文件的相互依赖关系；
//2.webpack能够处理js的兼容问题，把高级的浏览器不识别的语法，转为低级的浏览器能识别的语法；

//刚才运行的命令格式：   webpack 要打包的文件的路径 打包好的输出文件的路径；webpack .\src\main.js .\dist\bundle.js
// 这里老师说的有问题，大概是版本的问题吧，语法变了，现在是webpack .\src\main.js -o .\dist\bundle.js --mode=development


//使用webpack-dev-server 这个工具，来实现自动打包编译的功能
//1.运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
//2.安完毕后，这个工具的用法，和webpack命令的用法完全一样
//3.由于，我们是在项目中，本地安装的 webpack-dev-server ,所以，无法把它当作脚本命令，在
//powershell终端中直接运行；（只有那些安装到全局-g的工具，才能在终端中正常运行）
//4.注意：webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装webpack
//5.webpack-dev-server 帮我们打包的生成的 bundle.js文件，并没有存放到实际的物理硬盘中去，而是
//直接托管到了电脑的内存中，所以，我们在项目根目录中，根本找不到这个打包好的bundle.js
//6.我们可以认为，webpack-dev-server 把打包好的文件以一种虚拟的形式，托管到了我们的根目录中，虽然我们看不到它，
//但是，可以认为，它和dist src node_modules 平级，有一个看不见的文件，叫做bundle.js,这样有一个有一个有点（快）
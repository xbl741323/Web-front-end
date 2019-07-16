import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'
//注意：如果通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略路径前面
//的node_modules 这一层目录，直接写包的名称，然后后面跟上具体的文件路径
import 'bootstrap/dist/css/bootstrap.css'

//class关键词，是es6中提供提供的新语法是用来实现Ese6中面向对象编程的方式
class Person {
    //使用static关键词，可以定义静态属性
    //所谓静态属性，就是可以通过类名，直接访问的属性
    //实例属性：只能通过类的实例，来访问的属性，叫做实例属性
    static info = { name: 'zs', age: 20 }
}

//访问Person类身上的info属性
console.log(Person.info)
//在 webpack 中，默认只能处理一部分Es6的新语法，一些高级的Es6语法或者Es7语法，
//webpack是处理不了的；这时候，就需要借助第三方的loader,来帮助webpack处理这些高
//级的语法，当第三方loader把高级语法转为低级语法之后，会把结果交给webpack去打包到bundle.js中
//通过babel,可以帮我们将高级的语法转换成为低级的语法
//1.在webpack中，可以运行以下两套命令，安装两套包，去安装Babel相关的loader功能；
//1.1第一套包：npm i babel-core babel-loader babel-plugin-transform-runtime -D这里老师说的旧了，应该用 npm i babel-core babel-loader@7 babel-plugin-transform-runtime -D 
//1.2第二套包：npm i babel-preset-env babel-preset-stage-0 -D
//2.打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则；
//2.1{ test:/\.js$/,use: 'babel-loader', exclude:/node_modules/}
//注意：在配置babel的loader规则的时候，必须把node_modules目录，通过exclude
//选项排除掉，原因有两：
//2.2.1 如果不排除node_module目录，则会把node_modules中所有的第三方js文件,
//都打包编译，这样会非常消耗cpu,打包速度非常慢
//2.2.2 哪怕，最终，babel把所有node_module中的js转换完毕了，但是，项目也无法正常执行
//3.在项目的根目录中，新建一个叫做 .babelrc 的Babel配置文件，这个配置文件，属于JSON格式，
//所以，在写 .babelrc配置的时候，必须符合JSON语法规则，不能写注释，字符串必须用双引号
//3.1在.babelrc写如下的配置： 大家可以将presets翻译成语法的意思
// {
    //   "presets": ["env","stage-0"],
    //   "plugins": ["transform-runtime"]
// }
//4.了解：目前，我们安装的babel-preset-env,是比较新的Es6语法，之前，我们安装的是label-preset-es2015
//,现在，出了一个更新的语法插件，叫做babel-preset-env，它包含了所有的和es***相关的语法


//java c#实现面向对象的方式完全一样了，class是从后端语言中借鉴过来的，来实现面向对象

// function Animal(name) {
//     this.name = name
// }
// Animal.info = 123;
// var al = new Animal('小花');

//这是静态属性
// console.log(Animal.info)
// 这是实例属性
// console.log(al.name)



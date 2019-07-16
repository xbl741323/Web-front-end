//这是Node中向外暴漏成员的形式：
//module.exports = {}
//在Node中使用 var 名称 = require('模块标识符')
//module.export 和 exports 来暴漏成员

//在Es6中，也通过规范的形式，规定了Es6中如何导入和导出模块
//Es6中导入模块，使用import模块名称 from '模块标识符' import '表示路径'
//在Es6中，使用export default 和 export 向外暴漏成员：
// export default{
//     name:'zs',
//     age: 20
// }
var info = {
    name: 'zs',
    age: 20
}
export default info

// export default {
//     address: '北京'
// }

//注意：export default 向外暴漏的成员，可以使用任意的变量来接收
//注意：在一个模块中，export default 只允许向外暴漏一次
//注意：在一个模块中，可以同时使用export default 和 export 向外暴漏成员

export var title = '小星星'
export var content = '哈哈哈'

//注意：使用export向外暴漏的成员只能使用{}的形式来接收，这种形式叫做【按需导出】
//注意：export 可以向外暴漏多个成员，同时，如果某些成员，我们在import的时候不需要，则可以
//不在{}中定义
//注意：使用export导出的成员，必须严格按照导出时候的名称，来使用{}按需接收；
//注意：使用export导出的成员，如果就想换一个名称来接收，可以使用 as 来起别名 

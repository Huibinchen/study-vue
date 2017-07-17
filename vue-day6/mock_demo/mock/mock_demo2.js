// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // age值里的100是用于表示类型为number
    'list|1-10': [{'id|+2': 1 , 'age|20-30': 100}],
    'name': '@name',
    'friends|3': [{name: '@name'}],
    'email': '@email',
    'price|10-20.2-5': 11,
    'yourname|2-5': 'alice-',
    'img': '@image(80x80,@color,@word)'
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
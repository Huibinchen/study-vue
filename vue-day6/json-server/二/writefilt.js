// 使用 Mock
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    // age值里的100是用于表示类型为number
    'cart|60-90': [{'id|+1': 1, 'title': '@ctitle', 'num': 1}]
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
});
# vue-resource

## 简介

vue-resource是Vue.js的一款插件，它可以通过XMLHttpRequest或JSONP发起请求并处理响应

github地址：	[vue-resource](https://github.com/pagekit/vue-resource)

## promise

因为vue-resource中使用了es6中promise这个新特性，所以先介绍下promise

### promise简介

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大

所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

### 传统的异步操作转promise

传统写法：

```javascript
function async(a,b,cb){
	setTimeout(function (){
		cb(a+b)
	},200)
}	
async(1,2,function (result){
	// 延迟200ms后执行
	if (result>2){
		async(result,2,function(result){
			if (result>4){
				console.log(result)
			}
		})
	}
})
```

es6-promise写法：



```javascript
function async(a,b){
	//resolve异步操作成功时调用
	//reject失败时调用
	return new Promise(function(resolve,reject){
	
		if (typeof a !== "number" ||typeof b !== "number"){
			reject(new Error("不是一个number"));
		}
		setTimeout(function (){
			resolve(a+b);
		},1000)
	})
}
//不管是成功或者失败都会调用then这个方法
//然后接受两个函数作为参数，第一个是成功的
/*
promise:更加优雅，逻辑更加清晰
*/
async(1,'a')
	.then(function (result){
		console.log("第一次返回的值"+result)
		if (result > 2){
			return async(result,2)
		}
	},function (error){
		console.log("第一次错误:"+error)
		return 5;
	})
	.then(function (result){
		console.log("第二次返回的值"+result)
		if (result > 4){
			return async(result,2)
		}
	})
	.then(function (result){
		console.log("第三次返回的值"+result)
	})
	//catch捕获错误
	.catch(function(error){
		console.log("第二次错误:"+error)
	})
```

## 使用vue-resourse

进入项目目录后安装：`npm install vue-resource --save`

在项目中使用`vue-resource`：

```javascript
import Resource from 'vue-resource'

//使用vue-resourece
Vue.use(Resource)
```

然后就可以在项目中通过`this.$http`来调用对应的方法

比如调用get和post请求：

```javascript
created:function (){
  this.$http.post("getList",{user:'tangcaiye'})
    .then(function (data){
    console.log(data)
  })
}
```

其他的方法: [api文档](https://github.com/pagekit/vue-resource/blob/develop/docs/http.md)

## json-server模拟数据

如果会node服务器，可以使用node来模拟接口,或者也可以使用json-server，在它的帮助下，你能在半分钟之内搭建一个REST API服务器，而且支持CURD操作,在前端将数据跑通后，再跟后端去协调.

[github地址](https://github.com/typicode/json-server)

安装：`cnpm intall json-server --save-dev`

在项目中使用：

首先创建一个db.json，放在根目录下就可以了，它用于存放接口调用时的数据.比如：

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

`posts`,`comments`,`profile`是我的接口的router.

然后在dev-server.js中添加代码：

```javascript
const jsonServer = require('json-server')
const apiServer = jsonServer.create()
const apiRouter = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

apiServer.use(middlewares)
apiServer.use(apiRouter)
apiServer.listen(port+1, () => {
  console.log('JSON Server is running')
})
```

将这块代码放在`var server = app.listen(port)`之前就行，现在在浏览器中访问`http://localhost:8081`应该就能进到jsonserver页面中

但因为`jsonserver`服务器的端口号跟我们的服务器端口不一样，也就是跨域了，所以可以在vue-cli中设置代理:

### 设置代理



在`config/index.js`中的设置proxyTable的值为：

```javascript
	proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:8081/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
```

其中 '/api' 为匹配项，target 为被请求的地址

因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的

所以需要**通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '/'**

如果本身的接口地址就有 '/api' 这种通用前缀，就可以把 pathRewrite 删掉

## mock.js

*Mock.js*生成随机数据, 让前端攻城师独立于后端进行开发,实现前后端分离

[官方地址](http://mockjs.com/)

### 解决的问题

开发时，后端还没完成数据输出，前端只好写静态模拟数据。

- 数据太长了，将数据写在js文件里，完成后挨个改url。
- 某些逻辑复杂的代码，加入或去除模拟数据时得小心翼翼。
- 想要尽可能还原真实的数据，要么编写更多代码，要么手动修改模拟数据。
- 特殊的格式，例如IP,随机数，图片，地址，需要去收集。
- 超烂的破网速…
- …

### 安装

```
npm install mockjs
```

### 配置模拟数据-demo01

```javascript
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
```

### demo02

```javascript
var data = Mock.mock({
    //list|1-10 数组元素个数随机范围， id|+2 属性值递增, age|20-30数值随机范围
    // test|3.2-5 3.xx-3.xxxxx 整数位3，小数位位数范围为2-5
    //'yourname|2-4': 'alice-' 重复字符串的次数范围2-4
    //常规真实数据格式，@name @color @url @first @last @image

    'list|1-10': [{'id|+2': 1 , 'age|20-30': 100}],
    'name': '@name',
    'color': '@color',
    'url': '@url',
    'email': '@email',
    'friends|3': [{name: '@name'}],
    'price|10-20.2-5': 11,
    'cost|10-20.3': 11,
    'test|3.2-5': 52,
    'yourname|2-4': 'alice-'
    });
console.log(JSON.stringify(data, null, 2));
```

## axios.js

简介，在vue升级到2.0后，官方就不再更新`vue-resourece`，vue官网也不再推荐`vue-resource`作为推荐的HTTP库.转而推荐使用：axios。

尤大大原话：

> 最近团队讨论了一下，Ajax 本身跟 Vue 并没有什么需要特别整合的地方，使用 fetch polyfill 或是 axios、superagent 等等都可以起到同等的效果，vue-resource 提供的价值和其维护成本相比并不划算，所以决定在不久以后取消对 vue-resource 的官方推荐。已有的用户可以继续使用，但以后不再把 vue-resource 作为官方的 ajax 方案。
>
> 这里可以去掉 vue-resource，文档也不必翻译了。

如果要在vue项目中使用axios的话：

1.首先肯定是安装并添加到生产环节的依赖

```javascript
cnpm install axios --save
```

2.在`main.js`中引入`axios`

3.然后因为axios并不是vue的插件所以不能用`Vue.use`,但可以将它添加到Vue的原型中

```javascript
//将axios添加到vue的原型中
Vue.prototype.$http = axios
```

这样我们也可以像调用vue-resourece一样在组件中调用axios的方法.

[中文api](http://www.kancloud.cn/yunye/axios/234845) 



# 项目

馋口街
走客
平安口袋银行
中国电动车网
可及返利
豆瓣音乐人
掌中广材
助助
尾酒网
陪你宅
9平米
北京交警
一倍半
乐贴外卖
爱影订座
穷游网
酒尾网APP
晓调
魅玩
赔理宅
懒投资
酒仙网
魅玩帮
辣妈商城
饿了么
卷皮网
掌厨
康爱多
滴滴出行
美团外卖
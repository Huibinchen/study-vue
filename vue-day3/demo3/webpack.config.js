// 安装并引入extract-text-webpack-plugin插件
let ExtractTextPlugin = require('extract-text-webpack-plugin');

// 使用extract插件-参数定义了输出的路径及文件名，entry没有设置键，默认为main
let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');

module.exports = {

	entry:{
		zhangsan:"./module/main.js"
	},
	output:{
		filename: './js/bundle.js'
	},
	// 模块-》针对不对文件进行不同的模块处理
	module:{
		// webpack使用loader的方式来处理各种各样的资源，比如说样式文件，我们需要两种loader，css-loader 和 style－loader，css-loader会遍历css文件
		loaders:[
			// 默认的处理方式
			/*{
				test: /\.(css|less)$/,
				loader: 'style-loader!css-loader!less-loader'
			}*/
			// 使用css-loader,和less-loader处理文件，并使用extract来打包css文件
			{
				test: /\.(css|less)$/, 
				loader: extractCSS.extract(['css-loader','less-loader'])
			}
			/*{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}*/
		]
	},
	resolve:{
		// 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名 app.css
		extensions: [".js",".css",".less"],
		//模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            style : '../css/style',//后续直接 require('style') 即可
        }
	},
	plugins: [
		extractCSS
	],
	// 自动打包
	watch: true
}
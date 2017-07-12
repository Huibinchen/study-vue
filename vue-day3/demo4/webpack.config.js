module.exports = {
	entry: './module/main.js',
	output:{
		filename:'./js/bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				// 声明不转换的文件目录
				exclude: /node_modules/, 
				loader: 'babel-loader'
			}
		]
	}
}
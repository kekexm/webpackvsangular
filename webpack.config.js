var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ClearnPlugin = require('clean-webpack-plugin'); //每次打包前删除dist里面的文件
module.exports = {
	entry: {
		app: path.resolve(__dirname, './app/index.js'),//入口文件自己手写的  生成app.js
		vendor: ['jquery','bootstrap-loader','angular','angular-ui-router','echarts'] //提取第三方公共库 全局引入
	},
	output: {
		path: __dirname + "/dist",
		filename: 'builds/[name].js',
		publicPath: ""
	},
	resolve: {
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore :  __dirname + '/app',//  路径简写  index.js页面27行
            bts: __dirname + "/app/static/bootstrap/js/bootstrap.min.js"//引入本地静态bootstrap
            
        }
    },
	plugins: [
		new webpack.BannerPlugin('This file is created by kekexm'), //输出的头部文件添加注释信息
		// new webpack.optimize.CommonsChunkPlugin({
		// 	names: ['vendor', 'runtime']//修改会自动刷新
		// }),
		new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', jquery: 'jquery','window.jQuery': 'jquery',echarts: 'echarts' }),//全局的jquery
		//echarts也需要全局变量，否则无法获取到echarts对象 

		new htmlWebpackPlugin({
			template: __dirname + "/index.html", //处理当前路径的模板
			minify: { //压缩代码
				collapseWhitespace: true, //删除空格
				removeComments: true //删除注释
			},
			cache: false,
			hash: true //给每个文件后面 添加?版本号
		})
		// ,
		// new UglifyJSPlugin({ //压缩打包后的代码  在本地开发的时候不压缩，方便调试
		// 	comments: false //压缩后没有注释
		// })

	],
	devServer: {
		port: 5577,
		colors: true, //终端中输出结果为彩色
		historyApiFallback: true, //不跳转
		proxy:{
			'/api':{
				target:'http://localhost:5577',
				changeOrigin:true,
				secure:false
			}
		}
	},
	module: {
		loaders: [{
				test: /\.js$/,
				loader: 'babel',
				include: path.resolve(__dirname, 'app'), //全局的写法
				exclude: /node_modules/ //提升打包速度
			}, {
				test: /\.scss$/,
				loader: 'style!css!postcss!sass' // 从右向左解析  sass 需要依赖node-sass  
			}, {
				test: /\.html$/,
				loader: 'html'
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loader?importLoaders=1!postcss-loader' //下面通过postcss 属性  
			}, {
				test: /\.less$/,
				loader: 'style!css!postcss!less' // 从右向左解析  postcss 放在less和sass后面css前面
			}, {
				test: /\.(jpg|png|gif|svg|eot|ttf|woff|woff2)$/i, // 对图片格式压缩或者自定义字体的打包  
				loader: 'url-loader', // bade64 减少http 请求，但是代码冗余
				query: { // 对于超过limit大小限制的文件 不会整体打包到js中，会生成相应的文件
					limit: 20000, // 表示20kB的图片  url loader与file loader的工作方式相似，
					name: 'imgs/[name]-[hash:5].[ext]'
				}
			}
		]
	},
	postcss: [
		require('autoprefixer')({
			broswers: ['last 5 versions']// 属性前面加上浏览器版本
		})
	]
};

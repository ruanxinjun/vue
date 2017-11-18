var wp = require('webpack');
var html = require('html-webpack-plugin');

module.exports = {
	entry:__dirname+'/app/main.js',
	output:{
		path:__dirname+'/public',
		filename:'webpack.js'
	},
	module:{
		loaders:[
			{test:/\.json$/,loader:'json-loader'},
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader',options:{importLoaders:1}},
					{loader:'postcss-loader',options:{
						plugins:function(){
							return [require('autoprefixer')]
						}
					}}
				]
			},
			{
				test:/\.js$/,exclude:/node_modules/,loader:'babel-loader',
				query:{presets:['es2015','react']}
			}
		]
	},
	plugins:[
		new html({
			template:__dirname+'/app/index.html'
		})
	],
	devServer:{
		contentBase:'./public',
		inline:true
	}
}
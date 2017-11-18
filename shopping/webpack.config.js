var path = require("path");
var webpack = require('webpack');
var env  =  process.env.NODE_ENV;

var config  = {
	entry:{
		admin:'./admin/index.js',
		consumer:'./consumer/index.js'
	},
	output:{
		path:path.join(__dirname,'dist'),
		publicPath:'/dist/',
		filename:'[name].bundle.js'
	}
	,
	module:{
		loaders:[
			{test:/\.png$/,loader:'url-loader'},
			{test:/\.css$/,loader:'style-loader!css-loader'},
			{test:/\.less$/,loader:'style-loader!css-loader!less-loader'},
			{test:/\.js$/,loader:'babel-loader',exclude:'/node_modules/',query:{presets:['es2015']}}
		]
	}
	
};

if(env==='production'){
	config.plugins =[
	  new webpack.optimize.UglifyJsPlugin({
		  	compress:{
		  		warnings:false
		  	}
	 	})
	];
};

module.exports = config;
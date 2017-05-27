var config = require('../config');
var webpack = require('webpack');
var path = require('path');
var ExtractTextWebpackPlugin =require('extract-text-webpack-plugin');
var HtmlWebpackPlugin =require('html-webpack-plugin');
var pages=[
	"index",
	"login"
];
var pro=process.env.NODE_ENV==='production';
var host=pro?config.server.productionUrl:(process.env.HOST || config.server.developmentUrl);
var bootstraprcRoot=path.resolve(__dirname,"../.bootstraprc");
var bootstraprc="bootstrap-loader/lib/bootstrap.loader?extractStyles"+
		"&configFilePath="+bootstraprcRoot+
		"!bootstrap-loader/no-op.js";

var entryConfig={};
pages.forEach(function(page)
{
	entryConfig[page]=["bootstrap-loader",bootstraprc,path.resolve(config.webpack.dir.page,page+"/index.jsx")];
});

module.exports=
{
	entry:entryConfig,
	output:{
		filename:"[name]/index.js",
		path:config.webpack.outputPath,
		publicPath:host
	},
	module:{
		rules:[
			{
				test:/\.jsx$/,
				use:[
					{
						loader:"babel-loader",
						options:{
							presets:[
								'es2015',
								'react',
							],
							plugins:[
								"transform-class-properties",
								"transform-object-rest-spread"
							]
						}
					}
				],
			},
			{
				test:/\.css$/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:"css-loader?sourceMap&modules"
				})
			},
			{
				test:/\.scss$/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:"css-loader?sourceMap&modules"+"!sass-loader?sourceMap"
				})
			},
			{
				test:/\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use:[
					{
						loader:"url-loader",
						options:{
							limit:10000
						}
					}
				]
			},
			{
				test:/\.(ttf|eot|svg)(\?[\s\S+])?$/,
				use:[
					{loader:"file-loader"}
				]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:"index",
			filename:"index/index.html",
			template:path.resolve(config.webpack.dir.template,"index.html"),
			inject:'body',
			favicon:"",
			showErrors:true,
			xhtml:false,
			chunks:['index']
		}),
		new HtmlWebpackPlugin({
			title:"login",
			filename:"login/index.html",
			template:path.resolve(config.webpack.dir.template,"login.html"),
			inject:'body',
			favicon:"",
			showErrors:true,
			xhtml:false,
			chunks:['login']
		}),
		new ExtractTextWebpackPlugin("[name]/style.css"),
		new webpack.DefinePlugin({
			'__HOST':JSON.stringify(host)
		})
	],
	resolve:{
		alias:{
			core:path.resolve(__dirname,"../src/core"),
			root:path.resolve(__dirname,"../")
		},
		extensions:['.js','.jsx','.scss']
	}
};

const path = require('path');
const ExtractTextWebpackPlugin =require('extract-text-webpack-plugin');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const dirPages=path.resolve(__dirname,'../src/pages');
const dirTemplate = path.resolve(__dirname,'../src/templates');
const pages=[
	"index",
	"login"
];

const bootstraprcRoot=path.resolve(__dirname,"../.bootstraprc");
const bootstraprc="bootstrap-loader/lib/bootstrap.loader?extractStyles"+
		"&configFilePath="+bootstraprcRoot+
		"!bootstrap-loader/no-op.js";

const entryConfig={};
pages.forEach(function(page)
{
	entryConfig[page]=["bootstrap-loader",bootstraprc,"tether",path.resolve(dirPages,page+"/index.jsx")];
});

module.exports=
{
	entry:entryConfig,
	output:{
		filename:"[name]/index.js",
		path:path.resolve(__dirname,"../build"),
		publicPath:"./",
		sourceMapFilename:"[name].map"
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
								'react'
							],
							plugins:["transform-class-properties"]
						}
					}
				],
			},
			{
				test:/\.css$/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:"css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]"+"!postcss-loader"
				})
			},
			{
				test:/\.scss$/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:"css-loader?sourceMap&modules&importLoaders=2&localIdentName=[local]"+"!postcss-loader"+"!sass-loader?sourceMap"
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
			template:path.resolve(dirTemplate,"index.html"),
			inject:'body',
			favicon:"",
			showErrors:true,
			xhtml:false,
			chunks:['index']
		}),
		new HtmlWebpackPlugin({
			title:"login",
			filename:"login/index.html",
			template:path.resolve(dirTemplate,"login.html"),
			inject:'body',
			favicon:"",
			showErrors:true,
			xhtml:false,
			chunks:['login']
		}),
		new ExtractTextWebpackPlugin("[name]/style.css")
	],
	resolve:{
		extensions:['.js','.jsx','.scss']
	}
};

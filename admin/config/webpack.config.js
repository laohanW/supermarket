const path =require('path');
const webpack=require('webpack');
const autoprefixer=require('autoprefixer');
const precss=require('precss');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');
const dirPages=path.resolve(__dirname,'../src/pages');
const dirBuild=path.resolve(__dirname,'../build');
const dirTemplate=path.resolve(__dirname,'../src/template');
const rootPath=path.resolve(__dirname,'../');
const bootstraprc='bootstrap-loader/lib/bootstrap.loader?extractStyles&configFilePath='+rootPath+'/.bootstraprc!bootstrap-loader/no-op.js';


const entryConfig={};
const pages=[
	"login",
	"index"
];
pages.forEach(function(page){
	entryConfig[page]=[bootstraprc,"tether",path.resolve(dirPages,page+'/index.jsx')];
});


module.exports={
    entry:entryConfig,
    output:{
		path:dirBuild,
		filename:"[name]/index.js",
		publicPath:"../"
	},
    module:{
		loaders:[
			{
				test:/\.jsx$/,
				loader:"babel-loader",
				query:{
					presets:['es2015','react'],
					plugins:[
						['transform-class-properties']
					]

				},
			},
			{
				test:/\.scss$/,
				loader:ExtractTextWebpackPlugin.extract({
					fallback:'style-loader',
					use:'css-loader?sourceMap&modules&importLoaders=2&localIdentName=[local]'+'!postcss-loader'+'!sass-loader?sourceMap'
				})
			},
			{
				test:/\.css$/,
				loader:ExtractTextWebpackPlugin.extract({
					fallback:'style-loader',
					use:'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]'+'!postcss-loader'
				})
			},
			{
				test:/\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader:'url-loader',
			},
			{
				test:/\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				loader:'file-loader'
			},
			{
				test:/bootstrap\/dist\/js\/umd\//,
				loader:"imports-loader?jQuery=jquery"
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:"My App",
			filename:"login/index.html",
			inject:"body",
			template:dirTemplate+"/login.ejs",
			baseUrl:"",
			favicon:"",
			minify:false,
			hash:false,
			cache:false,
			showErrors:true,
			xhtml:false,
			chunks:['login']
		}),
		new HtmlWebpackPlugin({
			title:"My App",
			filename:"index/index.html",
			inject:"body",
			template:dirTemplate+"/index.ejs",
			baseUrl:"",
			favicon:"",
			minify:false,
			hash:false,
			cache:false,
			showErrors:true,
			xhtml:false,
			chunks:['index']
		}),
		new ExtractTextWebpackPlugin('[name]/style.css'),
		new webpack.DefinePlugin({
			'window.Tether':'tether',
			$:'jquery',
			jQuery:'jquery'
		}),
		new webpack.LoaderOptionsPlugin({
			postcss:function()
			{
				return [precss,autoprefixer];
			}
		}),
		new webpack.DefinePlugin({
			'env':{
				NODE_ENV:JSON.stringify('development')
			}
		})
	],
    resolve:{
		alias:{},
		extensions:[' ','.js','.jsx','.html']
	}
};

const path =require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');
const dirPages=path.resolve(__dirname,'../src/pages');
const dirBuild=path.resolve(__dirname,'../build');
const dirTemplate=path.resolve(__dirname,'../src/template');



const entryConfig={};
const pages=[
	"index"
];
pages.forEach(function(page){
	entryConfig[page]=path.resolve(dirPages,page+'/index.jsx');
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
				test:/\.less$/,
				loader:ExtractTextWebpackPlugin.extract("css?minimized&-autoprefixer!postcss!less")
			}
		]
	},
	plugins:[
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
		new ExtractTextWebpackPlugin('[name]/style.css')
	],
    resolve:{
		alias:{},
		extensions:[' ','.js','.jsx','.html']
	}
};

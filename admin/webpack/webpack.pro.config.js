const webpack =require('webpack');
const webpackMerge =require('webpack-merge');
const baseConfig =require('webpack.base.config.js');
const autoprefixer =require('autoprefixer');
const config = require('../config');
module.exports=webpackMerge(baseConfig,{
	plugins:[
		new ExtractTextPlugin({
			filename:"[name].style.css",
			allChunks:true
		}),		
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify('production'),
			'__HOST':config.server.productionUrl
		}),
		new webpack.ProvidePlugin({
			postcss:[autoprefixer]
		})
	]
});

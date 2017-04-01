const webpack =require('webpack');
const webpackMerge =require('webpack-merge');
const baseConfig =require('webpack.base.config.js');
const autoprefixer =require('autoprefixer');

module.exports=webpackMerge(baseConfig,{
	plugins:[
		new ExtractTextPlugin({
			filename:"[name].style.css",
			allChunks:true
		}),		
		new webpackDefinePlugin({
			'process.env':{
				NODE_ENV:JSON.stringify('production')
			}
		}),
		new webpack.ProvidePlugin({
			postcss:[autoprefixer]
		})
	]
});

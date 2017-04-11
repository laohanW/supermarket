var webpack =require('webpack');
var webpackMerge =require('webpack-merge');
var baseConfig =require('./webpack.base.config.js');
var autoprefixer =require('autoprefixer');
var config = require('../config');

module.exports=webpackMerge(baseConfig,{
	output:{
		sourceMapFilename:"[name].map"
	},
	devtool:"#cheap-module-eval-source-map",
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.ProvidePlugin({
			"window.Tether":"tether",
			$:"jquery",
			jQuery:"jquery"
		}),
		new webpack.LoaderOptionsPlugin({
			postcss:[autoprefixer]
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify('development')
		})
	]
});



const webpack =require('webpack');
const webpackMerge =require('webpack-merge');
const baseConfig =require('./webpack.base.config.js');
const autoprefixer =require('autoprefixer');

module.exports=webpackMerge(baseConfig,{
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
			'process.env':{
				NODE_ENV:JSON.stringify('production')
			}
		})
	]
});



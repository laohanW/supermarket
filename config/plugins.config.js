var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');
var webpack=require("webpack");
module.exports=[
    new HtmlWebpackPlugin(
    {
        title:"My App",
        filename:"index.html",
        template:"template/index.ejs",
        inject:"body",
        favicon:"",
        minify:false,
        hash:false,
        cache:false,
        showErrors:true,
        xhtml:false
    }),
    new webpack.DefinePlugin(
        {
            __PRO__:JSON.stringify('true'),
            __DEV__:JSON.stringify('false'),
            __DEBUG__:JSON.stringify('false')
        }
    ),
    new ExtractTextWebpackPlugin('[name]/style.css')
];

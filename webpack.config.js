const precss=require('precss');
const autoprefixer=require('autoprefixer');
module.exports={
    entry:require("./config/entry.config.js"),
    output:require("./config/output.config.js"),
    module:require("./config/module.config.js"),
    resolve:require("./config/resolve.config.js"),
    plugins:require("./config/plugins.config.js"),
    postcss:function()
    {
        return [precss,autoprefixer];
    },
    devServer:{
        contentBase:'./build',
        colors:true,
        inline:true,
        host:'192.168.1.6',
        port:'3000'
    }
};

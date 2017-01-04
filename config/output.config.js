var dirVars=require("../config/dir-vars.config");
module.exports={
    path:dirVars.build,
    publicPath:'../',
    filename:'[name]/index.js',
    chunkFilename:'[id].bundle.js'
};

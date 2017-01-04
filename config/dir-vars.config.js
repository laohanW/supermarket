var path=require("path");
var modules={
    root:path.resolve(__dirname,'../'),
    src:path.resolve(__dirname,'../src'),
    build:path.resolve(__dirname,'../build'),
    libs:path.resolve(__dirname,'../libs'),
    vendor:path.resolve(__dirname,'../vendor'),
    dll:path.resolve(__dirname,'../src/dll'),
    page:path.resolve(__dirname,'../src/pages'),
    public:path.resolve(__dirname,'../src/public'),
    logic:path.resolve(__dirname,'../src/public/logic'),
    config:path.resolve(__dirname,'../src/public/config'),
    component:path.resolve(__dirname,'../src/public/conponents'),
    layout:path.resolve(__dirname,'../src/public/layout')
};
module.exports=modules;

var path=require("path");
var dir_vars=require("../config/dir-vars.config");
var configEntry={};
var pageArr=[
    "index"
];
pageArr.forEach((page)=>{
    configEntry[page]=path.resolve(dir_vars.page,page+"/index.jsx");
});
module.exports=configEntry;

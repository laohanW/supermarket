var fs=require('fs');
var dirVars=require("../config/dir-vars.config.js");
var rimraf=require('rimraf');
rimraf(dirVars.build,fs,()=>{
    console.log("build delete ok");
});

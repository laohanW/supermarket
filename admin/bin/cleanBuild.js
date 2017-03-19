const rimraf=require('rimraf');
const fs=require('fs');
const path=require('path');
const dirBuild=path.resolve(__dirname,'../build');
rimraf(dirBuild,fs,function()
{
	console.log('delete ok');
});

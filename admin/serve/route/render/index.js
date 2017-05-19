var express=require('express');
module.exports={
	middleware:[
		],
	router:[
		{
			url:"/",
			method:"GET",
			route:[
				require('./main')
			]
		}
	]
};

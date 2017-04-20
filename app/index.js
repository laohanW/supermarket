var express = require('express');
var routes = require('./route');
require('./global');
var app=express();
routes.forEach(function(route,i)
{
	app.use(route.url,route.route);	
});
var server=app.listen(__PORT,function(callback)
{
	var address=server.address().address;
	var port=server.address().port;
	console.log("app listening..."+address+"   -"+port);
});

var express = require('express');
var bodyParser = require('body-parser');
var validation = require('express-validator');
var mongoose = require('mongoose');
var config = require('./config');
var routes = require('./route');
require('.global');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
routes.forEach(function(route,i)
{
	app.use(route.url,route.route);	
});
var server=app.listen(__HOST,function(callback)
{
	var address=server.address().address;
	var port=server.address().port;
	console.log("app listening..."+address+"   -"+port);
});

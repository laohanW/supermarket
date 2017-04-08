var express = require('express');
var app     = express();
var path    = require('path');
var ejs     = require('ejs');
var session = require('express-session');
var validator = require('express-validator');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var routes  = require('./route');
var config = require('../config');
require('./global');
app.set('view engine','html');
app.engine('html',ejs.renderFile);
app.set('views',path.resolve(__dirname,"../build"));
var options = {
	dotfiles   : "ignore",
	etag       : true,
	extensions : [],
	index      : "index.html",
	maxAge     : 0,
	redirect   : true,
	setHeader  : function(res,path,stat)
	{
		res.set('x-timestamp',Date.now());
	}
};
app.use(express.static(path.resolve(__dirname,'../build'),options));
app.use(validator());
app.use(cookieParser());
app.user(bodyParser.json());
aapp.use(session({
	name              : "skey",
	secret            : "keyboard cat",
	store             : new MongoStore({mongooseConnection : mongoose.connection}),
	saveUninitialized : false,
	resave            : false,
	cookie            : {
		maxAge        : 18*60*1000
	}
}));
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect(config.mongo.host+"/"+config.mongo.db);
routes.forEach(function(p){
	app.use(p.url,p.route);
});

var server=app.listen(3000,function()
{
	var address=server.address().address;
	var port=server.address().port;
	console.log('listening....'+address+":"+port);
});

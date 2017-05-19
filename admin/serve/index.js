var express = require('express');
var app     = express();
require('./global');
var path     = require('path');
var ejs      = require('ejs');
var session = require('express-session');
var mongoose = require('mongoose');
var routes   = require('./route');
var config   = require('../config');
var MongoStore = require('connect-mongo')(session);
app.set('view engine','html');
app.engine('html',ejs.renderFile);
app.set('views',path.resolve(__dirname,"../build"));
app.use(express.static(path.resolve(__dirname,'../build'),{
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
	})
);
mongoose.Promise=global.Promise;
mongoose.connect(config.mongo.host+"/"+config.mongo.db);
app.use(session({
		name              : "sessionid",
		secret            : global.__SECRET,
		store             : new MongoStore({url:global.__MONGO_HOST+"/"+global.__MONGO_DB}),
		saveUninitialized : true,
		resave            : true,
		cookie            : {
			maxAge        : 60*1000
		}
	})
);
routes.forEach(function(p){
	app.use(p.url,p.route);
});

var server=app.listen(global.__PORT,function()
{
	console.log(server.address());
	var address=server.address().address;
	var port=server.address().port;
	console.log('listening....'+address+":"+port);
});

var express = require('express');
var render=require('./render');
var api = require('./api');
var assets = require('./assets');
module.exports=[
	{
		url:"/render",
		route:routeConfig(render)
	},
	{
		url:"/api",
		route:routeConfig(api)
	},
	{
		url:"/assets",
		route:routeConfig(assets)
	}
];
function routeConfig(config)
{
	var router=express.Router();
	if(config.middleware)
	{
		config.middleware.forEach(function(m,i)
		{
			router.use(m);
		});
	}
	config.router.forEach(function(c,i)
	{
		if (c.method==="POST")
		{
			router.post(c.url,...c.route);
		}
		else if(c.method==="GET"){
			router.get(c.url,...c.route);
		}
		else if(c.method==="PUT"){
			router.put(c.url,...c.route);
		}
	});
	return router;
}


var express = require('express');
module.export=[
	{
		url:"/api",
		route:routeConfig(require('./api'))
	},
	{
		url:"/assets",
		route:routeConfig(require('./assets'))
	}
];
function routeConfig(config)
{
	var router=express.Router();
	config.forEach(function(c,i)
	{
		if (c.method==="POST")
		{
			router.post(c.url,route);
		}
		else if(c.method==="GET"){
			router.get(c.url,route);
		}
		else if(c.method==="PUT"){
			router.put(c.url,route);
		}
	});
	return router;
}

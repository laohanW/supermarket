var render=require('./render');
var api = require('./api');
var assets = require('./assets');
module.exports=[
	{
		url:"/render",
		route:render
	},
	{
		url:"/api",
		route:api
	},
	{
		url:"/assets",
		route:assets
	}
];

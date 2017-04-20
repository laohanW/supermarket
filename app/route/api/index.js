var utility = require('../../core/utility');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('../../config');
var expressValidator = require('express-validator');
module.exports={
	middleware:
	[
		bodyParser.json(),
		bodyParser.urlencoded({extended:false}),
		expressJwt({secret:config.iron.secret}).unless({path:['/api/login']}),
		expressValidator({
			customValidators:{
				isArray:function(value)
				{
					return Array.isArray(value);
				}
			}
		})
	],
	router:[
		{
			url:"/login",
			method:"POST",
			route:[
				utility.validation({
					"username":{
						notEmpty:true,
						errorMessage:"user is invalid"
					}
				}),
				require('./login')
			]
		},
		{
			url:"/register",
			method:"POST",
			route:[
				utility.validation({
					"username":{
						notEmpty:true,
						errorMessage:"user is empty"
					}
				}),
				require('./register')
			]
		},
		{
			url:"/test",
			method:"POST",
			route:[
				utility.jwt({secret:global.__SECRET}),
				utility.validation({
					"username":{
						notEmpty:true,
						errorMessage:"user is invalid"
					}
				}),
				function(req,res)
				{
					res.json({result:{code:200,msg:"success"}});
					res.end();
				}
			]
		}
	]
};

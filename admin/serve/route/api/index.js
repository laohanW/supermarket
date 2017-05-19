var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var utility = require('../../core/utility');
module.exports={
	middleware:[
		cookieParser(global.__SECRET),
		bodyParser.json(),
		bodyParser.urlencoded({extended:false}),
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
						errorMessage:"username is empty"
					},
					"password":{
						notEmpty:true,
						errorMessage:"password is empty"
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
						errorMessage:"username is empty"
					},
					"password":{
						notEmpty:true,
						errorMessage:"password is empty"
					}
				}),
				require('./register')
			]
		},
		{
			url:"/logout",
			method:"POST",
			route:[
				require('./logout')
			]
		}
	]
};

/*

router.post('/login',function(req,res)
{
	console.log("login");
	console.log(req.cookies);
	console.log(req.sessionID);	
	console.log(req.session);
	req.checkBody('username',errorCode.login_invalid).notEmpty();
	req.checkBody('password',errorCode.login_invalid).notEmpty();
	var errors=req.validationErrors();
	if(errors && errors.length>0)
	{
		var msgs=[];
		errors.forEach(function(err,index)
		{
			msgs.push(errors[index]);	
		});
		res.json({
			result:{
				code:msgs
		
			}
		});
		res.end();
		return;
	}
	var username=req.body.username;
	var password=req.body.password;
	userController.check(username,password,function(err,user)
	{
		if (err)
		{
			res.json({
				result:{
					code:[errorCode.login_invalid]
				}
			});
			res.end();
			return;
		}
		else{
			req.session.login=true;
			res.json({
				result:{
					code:[errorCode.success]
				}
			});
			console.log(res.session);
			res.end();
		}
	});
});
router.post('/register',function(req,res)
{
	console.log('register');
	console.log(req.body);
	req.checkBody('username',errorCode.register_invalid).notEmpty();
	req.checkBody('password',errorCode.register_invalid).notEmpty();
	var errors=req.validationErrors();
	if (errors && errors.length>0)
	{
		var msgs=[];
		errors.forEach(function(err,i)
		{
			msgs.push(errors[i]);		
		});
		res.json({
			result:{
				code:msgs
			}
		});
		res.end();
		return;
	}
	var username=req.body.username;
	var password=req.body.password;
	userController.contains(username,function(err,user)
	{
		if (err || user)
		{
			res.json({
				result:{
					code:[errorCode.register_invalid]
				}
			});	
			res.end();
			return;	
		}
		userController.save(username,password,function(err,user)
		{
			if (err)
			{
				res.json({
					result:{
						code:[errorCode.register_invalid]
					}
				});
				res.end();
			}
			else{
				res.json({
					result:{
						code:[errorCode.sucess]
					}
				});
				res.end();
			}
		});
	});
});
router.post('/logout',function(req,res)
{
	console.log('logout');
	req.session.login=false;
	res.json({
		result:{
			code:[errorCode.success]
		}
	});
	res.end();
});
module.exports=router;*/

var router = require('express').Router();
var errorCode = require('../../core/constant/errorCode');
var userController = require('../../controller/userController');
router.post('/login',function(req,res)
{
	console.log("login");
	console.log(req.sessionID);		
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
			req.session.username=username;
			req.session.user=user;
			
			res.json({
				result:{
					code:[errorCode.success]
				}
			});
			console.log(req);
			console.log('ok');
			res.end();
		}
	});
})
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
})
module.exports=router;

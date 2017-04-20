var userController = require('../../controller/userController');
module.exports=function(req,res)
{
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
	
};

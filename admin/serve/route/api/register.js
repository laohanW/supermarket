var errorCode = require('../../core/constant/errorCode');
var userController = require('../../controller/userController');
module.exports=function(req,res)
{
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

};

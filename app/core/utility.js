var jwt = require('jsonwebtoken');
var internals={};

internals.validation=function(params)
{
	return function(req,res,next)
	{
		req.check(params);
		var errors=	req.validationErrors();
		if(errors && errors.length>0)
		{
			var msgs=[];
			errors.forEach(function(e,i)
			{
				msgs.push(e);
			});
			res.json({
				result:{
					code:301,
					message:msgs
				}
			});
		}
		else{
			next();
		}
		next();
	};
};
internals.jwt=function(param)
{
	return function(req,res,next)
	{

		var authorization=req.headers.authorization;
		if(authorization)
		{
			var split=authorization.split(' ');
			if(split.length>1)
			{
				var token=split[1];
				jwt.verify(token,param.secret,function(err,decoded)
				{
					if (err)
					{
						res.json({
							result:{
								code:301,
								message:err.message
							}
						});
					}
					else{
						next();	
					}
				});
			}
			else{
					
			}
		}
		else{
				
		}
	};
};

module.exports=internals;

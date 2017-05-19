var errorCode = require('./constant/errorCode');
var internals={};
internals.validation=function(params)
{
	return function(req,res,next)
	{
		req.check(params);
		var errors=req.validationErrors();
		if(errors && errors.length>0)
		{
			var msgs=[];
			errors.forEach(function(e,i)
			{
				msgs.push(e);		
			});
			res.json({
				result:{
					code:errorCode.validation_invalid,
					message:msgs
				}
			});
			res.end();
		}
		next();
	};
};

module.exports=internals;

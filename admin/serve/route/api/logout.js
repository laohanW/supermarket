var errorCode = require('../../core/constant/errorCode');
module.exports=function(req,res)
{
	console.log('logout');
	req.session.login=false;
	res.json({
		result:{
			code:[errorCode.success]
		}
	});
	res.end();

};

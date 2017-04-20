var jwt = require('jsonwebtoken');
module.exports=function(req,res,next)
{
	var username=req.body.username;
	var authToken=jwt.sign({name:username},__SECRET);
	res.json({token:authToken});
	console.log("login");	
	res.end();
};

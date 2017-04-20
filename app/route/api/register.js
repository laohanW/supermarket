module.exports=function(req,res)
{
	console.log("register")	;
	res.json({
		result:{
			code:200,
			message:"success"
		}
	});
	res.end();
};

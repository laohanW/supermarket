module.exports=function(app)
{
	app.use("*",function(req,res,next)
	{
		res.header('Access-Control-Allow-Origin','*');
		res.header('Access-Control-Allow-Headers','Content-Type,Content-Length,Authorization,Accept,X-Requested-Width,yourHeaderField');
		res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
		res.header('X-Powered-By',' 3.2.1');
		res.header('Content-Type','application/json;charset=utf-8');
		next();
	});
	app.use("/admin",require('./adminLogin'));
};

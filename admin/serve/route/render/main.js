module.exports=function(req,res)
{
	if (req.session.login)
	{
		res.render('index');
	}
	else
		res.render('login');
	res.end();
	
};

var express=require('express');
var router = express.Router();
router.get('/',function(req,res)
{
	if (req.session.login)
	{
		res.render('index');
	}
	else
		res.render('login');
	res.end();
});
module.exports=router;

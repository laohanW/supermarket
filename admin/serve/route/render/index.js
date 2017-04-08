var express=require('express');
var router = express.Router();
router.get('/',function(req,res)
{
	console.log('get');
	console.log(req.cookies);
});
router.get('/index',function(req,res)
{	
	console.log('get');
	res.render("index");
	res.end();
});
router.get('/login',function(req,res)
{
	res.render('login');
	res.end();
});
module.exports=router;

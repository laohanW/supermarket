var express=require('express');
var router = express.Router();
router.get('/',function(req,res)
{
	console.log('get');
	console.log(req.cookies);
	console.log(req.session);
	res.render('login');
});
module.exports=router;

const router = require('express').Router();
const controller =require('../controller/adminFindUserController');

router.post("/login",function(req,res)
{
	let has=controller.findUser(req.body.username,req.body.password)
	console.log(has);
	res.json({result:"success"});
});
module.exports=router;

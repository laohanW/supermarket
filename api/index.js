const express =require('express');
const session =require('express-session');
const cookieParse=require('cookie-parser');
const bodyParser =require('body-parser');
const MongoStore=require('connect-mongo')(session);
const mongoose=require('mongoose');
mongoose.connect("localhost:27017/test");
const app=express();
const routes =require('./src/routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParse());
app.use(session({
	name:"skey",
	secret:"keyboard cat",
	store:new FileStore({
		path:"./sessions"
	}),
	saveUninitialized:false,
	resave:false,
	cookie:{
		maxAge:60*1000
	}
}));
routes(app);
/*app.post('*',function(req,res)
{
	console.log("body:"+JSON.stringify(req.body));
	console.log("json:"+req.json);
	console.log("param:"+req.param);
	res.json({result:"success"});
});*/
const server=app.listen(4000,function()
{
	let address=server.address().address;
	let port=server.address().port;
	console.log('listening at  '+address+" :"+port);
});

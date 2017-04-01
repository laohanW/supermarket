const express =require('express');
const path =require('path');
const ejs =require('ejs');
const app=express();
const options={
	dotfiles:"ignore",
	etag:true,
	extensions:[],
	index:"index.html",
	maxAge:0,
	redirect:true,
	seHeader:function(res,path,stat)
	{
		res.set('x-timestamp',Date.now());
	}
};
app.use(express.static(__dirname+'/build',options));

app.set('view engine','html');
app.engine('html',ejs.renderFile);
app.set('views',__dirname+"/build");


app.get('*',function(req,res)
{
	res.render("login");
});
const server=app.listen(3000,function()
{
	let address=server.address().address;
	let port=server.address().port;
	console.log('listening....'+address+":"+port);
});

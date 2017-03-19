const express=require('express');
const app=express();

app.use(express.static('build',{
	dotfiles:'ignore',
	etag:true,
	extensions:[],
	index:'index.html',
	lastModified:true,
	maxAge:0,
	redirect:true,
	setHeaders:function(res,path,stat)
	{
		res.set('x-timestamp',Date.now());
	}
}));
app.set('view engine','html');
app.engine('html',require('ejs').renderFile);
app.set('views',__dirname+'/build');

app.get('*',function(req,res)
{
	res.render('login');
});

const server=app.listen(3000,function()
{
	let host=server.address().address;
	let port=server.address().port;
	console.log("listening as =>"+host+":"+port);
});

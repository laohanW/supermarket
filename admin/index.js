const hapi=require('hapi');
const hoek=require('hoek');
require('./config/global');
const server=new hapi.Server({
	connections:{
		routes:{
			files:{
				relativeTo:__dirname+'/build'
			}
		}
	}
});
server.connection({host:"192.168.38.134",port:3000});
server.register(require('inert'),function(err){
	hoek.assert(!err,err);
});
server.register(require('vision'),function(err){
	hoek.assert(!err,err);
	server.views({
		engines:{
			html:require('ejs')
		},
		relativeTo:__dirname+"/build",
		path:"./"
	});
});
server.route({
	method:"GET",
	path:"/",
	handler:function(req,reply)
	{

		reply.view('login/index');
	}
});
server.route({
	method:"GET",
	path:"/{param*}",
	handler:{
		directory:{
			path:"./",
			redirectToSlash:true,
			index:true
		}
	}
});
server.start(function(err){
	hoek.assert(!err,err);
	console.log('server running at:'+server.info.uri);
});

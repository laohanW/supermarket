
module.exports=[
	{
		url:"/login",
		method:"POST",
		route:[
			function(req,res,next)
			{
				req.checkBody('username',"").notEmpty();
				var errors=	req.validationErrors();
				if(errors && errors.length>0)
				{
					var msgs=[];
					errors.forEach(function(e,i)
					{
						msgs.push(e);
					});
					res.json({
						result:{
							code:301
						}
					});
				}
				else{
					next();
				}
			},
			require('./login')
		]
	}
];

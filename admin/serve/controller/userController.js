var User = require('../model/userModel');
var internals={};

internals.check=function(username,password,callback)
{
	User.findOne({'username':username},function(err,user)
	{
		if(err)
		{
			callback("err");			
		}
		else{
			if (user)
			{
				var bcry=user.validPassword(password);
				if (bcry)
				{
					callback(err,user);	
				}
				else{
					callback('err');	
				}
			}
			else{
				callback('err');	
			}
		}
	});
};
internals.contains=function(username,callback)
{
	User.findOne({'username':username},callback);
};
internals.save=function(username,password,callback)
{
	var user=new User();
	user.username=username;
	user.password=user.encryptPassword(password);
	user.save(callback);
};
module.exports=internals;

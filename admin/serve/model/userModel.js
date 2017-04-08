var mongoose = require('mongoose');
var bcrypt=require('bcrypt-nodejs');
var User=new mongoose.Schema(
{
	username:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
});
User.methods.encryptPassword=function(password)
{
	return	bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
};
User.methods.validPassword=function(password)
{
	return bcrypt.compareSync(password,this.password);
};
module.exports=mongoose.model('users',User);

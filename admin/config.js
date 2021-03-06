var path = require('path');
module.exports={
	webpack:{
		dir:{
			page:path.resolve(__dirname,'./src/pages'),
			template:path.resolve(__dirname,'./src/templates')
		},
		outputPath:path.resolve(__dirname,'./build')
	},
	render:{
		title:"admin"
	},
	server:{
		auth:{
			scheme:'jwt',
			strategy:'jwt_token',
			secret:'keyboard cat',
			algorithms:'HS256'
		},
		protocol:'http://',
		developmentUrl:'http://192.168.5.8:3000',
		developmentPort:"3000",
		productionUrl:'http://192.168.38.134:8080',
		productionPort:"8080"
	},
	user:{
		token:{
			expiresIn:4500
		},
		session:{
			name:'USER_SESSION',
			ttl:24*60*60*1000
		},
		locale:'en',
		redirectOnLogin:'dashboard',
		redirectOnRegoster:'login'
	},
	redis:{
		password:'ASDZKJOEIREW',
		dbNumber:1,
		key:{
			users:'users',
			rooms:'chatRooms'
		}
	},
	mongo:{
		host:'mongodb://localhost:27017',
		db:"test"
	},
	api:{
		name:'api',
		routes:{
			path:'api/v1'
		},
		version:'0.0.1'
	},
	iron:{
		secret:'ASDWQFFFASD'
	}
};

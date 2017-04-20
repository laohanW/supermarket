const config={
	layoutManager:{
		name:'layoutManager',
		link:"/layoutManager",
		pageComponent:require('./containers/layoutManager/index').default,
		breadcrumbs:"",
		pageHeader:{
			title:"",
			subtitle:""
		},
		pageValue:""
	},
	userNanager:{
		name:"userManager",
		link:"/userManager",
		pageComponent:require('./containers/userManager/index').default
	},
	imageManager:{
		name:"imageManager",
		link:"/imageManager",
		pageComponent:require('./containers/imageManager/index').default
	}

};
export default config;

import fetch from 'isomorphic-fetch';
const protocol='http://192.168.38.134:3000';
export function loginAction(username,password)
{
	return (dispatch)=>{
		//fetch("http://192.168.1.6:4000");
		fetch(protocol+"/admin/login",{
			method:"POST",
			mode:'cors',
			headers:{
				"Accept":'application/json',
				"Content-Type":'application/json'
			},
			credentials:'include',
			body:JSON.stringify({'username':username,'password':password})
		}).then(res=>{
			console.log(res);
			return res.json();
		}).then(json=>{
			console.log(json);
		});
		dispatch({type:"TEST2"});
	};
}
export function registerAction(username,password)
{
	return (dispatch)=>{
		fetch(protocol+'/admin/register',{
			method:"POST",
			mode:'cors',
			headers:{
				'Accept':"application/json",
				"Content-Type":'application/json'
			},
			credentials:'include',
			body:JSON.stringify({'username':username,'password':password})
		}).then(res=>{
			console.log(res);
			return res.json();
		}).then(json=>{
			console.log(json);
		});
		dispatch({type:"TEST3"});
	};
}

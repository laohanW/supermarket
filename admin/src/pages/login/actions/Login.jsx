import fetch from 'isomorphic-fetch';
import errorCode from 'core/constant/errorCode';
import {url} from 'core/constant/protocol';
export function loginAction(username,password)
{
	return (dispatch)=>{
		//fetch("http://192.168.1.6:4000");
		fetch(url+"/api/login",{
			method:"POST",
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json'
			},
			credentials:'same-origin',
			body:JSON.stringify({'username':username,'password':password})
		}).then(res=>{
			return res.json();
		}).then(json=>{
			if (json.result.code==errorCode.success)
			{
				window.location.reload(true);
			}
			dispatch({type:"TEST2"});
		}).catch(err=>{
			console.log(err);
		});
	};
}
export function registerAction(username,password)
{
	return (dispatch)=>{
		fetch(url+'/api/register',{
			method:"POST",
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json'
			},
			body:JSON.stringify({'username':username,'password':password})
		}).then(res=>{
			return res.json();
		}).then(json=>{
			console.log(json);
		}).catch(err=>{
			console.log(err);
		});
		dispatch({type:"TEST3"});
	};
}

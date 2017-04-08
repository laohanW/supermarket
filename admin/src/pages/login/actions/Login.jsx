import fetch from 'isomorphic-fetch';
import errorCode from 'core/constant/errorCode';
import history from 'history';
const protocol='http://192.168.1.6:3000';
export function loginAction(username,password)
{
	return (dispatch)=>{
		//fetch("http://192.168.1.6:4000");
		fetch(protocol+"/api/login",{
			method:"POST",
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json'
			},
			body:JSON.stringify({'username':username,'password':password})
		}).then(res=>{
			console.log(res);
			return res.json();
		}).then(json=>{
			console.log(json);
			if (json.result.code==errorCode.success)
			{
				fetch(protocol+'/render');
			}
			dispatch({type:"TEST2"});
		});
	};
}
export function registerAction(username,password)
{
	return (dispatch)=>{
		fetch(protocol+'/api/register',{
			method:"POST",
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json'
			},
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

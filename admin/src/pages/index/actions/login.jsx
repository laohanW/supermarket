import fetch from 'isomorphic-fetch';
import {url} from 'core/constant/protocol';
import errorCode from 'core/constant/errorCode';
export function logoutAction()
{
	return dispatch=>{
		fetch(url+"/api/logout",{
			method:"POST",
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json'
			},
			credentials:'same-origin'
		})
		.then(res=>{
			return res.json();
		}).then(json=>{
			if(json.result.code==errorCode.success)
			{
				window.location.reload(true);
			}
		}).catch(err=>{
			console.log(err);
		});
		dispatch("TEST");
	};
}

import fetch from 'isomorphic-fetch';
export function loginAction()
{
	return (dispatch,getState)=>{
		console.log(getState());
		let state=getState();
		//fetch("http://192.168.1.6:4000");
		fetch("http://192.168.1.6:4000/admin/login",{
			method:"POST",
			mode:'cors',
			headers:{
				"Accept":'application/json',
				"Content-Type":'application/json'
			},
			credentials:'include',
			body:JSON.stringify({username:"a",password:2})
		}).then(res=>{
			console.log(res.headers.get());
			return res.json();
		}).then(json=>{
			console.log(json);
		});
		dispatch({type:"TEST2"});
	};
}

import fetch from 'isomorphic-fetch';
export function LoginAction()
{
	return (dispatch,getState)=>{
		console.log(getState());
		let state=getState();
		fetch("http://192.168.38.143/login",{
			method:"POST",
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				username:state.username,
				password:state.password
			})
		});
		return Promise.resolve();
	};
}

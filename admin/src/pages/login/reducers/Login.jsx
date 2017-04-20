


function Login(state={},action)
{
	switch(action.type)
	{
		case "TEST":
			return Object.assign({},state,{
				test:1
			});
		default:
			return state;
	}
}
export default Login;

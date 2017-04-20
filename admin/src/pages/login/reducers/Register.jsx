function Register(state={},action)
{
	switch(action.type)
	{
		case "TEST_TEGISTER":
			return Object.assign({},state,{
				test:2
			});
		default:
			return state;
	}
}
export default Register;

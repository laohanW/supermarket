


export default function Login(state={},action)
{
	switch(action)
	{
		case "TEST":
			return Object.assign({},state,{
				test:1
			});
		default:
			return state;
	}
}

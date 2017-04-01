
export default function Register(state={},action)
{
	switch(action)
	{
		case "TEST":
			return Object.assign({},state,{
				test:2
			});
		default:
			return state;
	}
}

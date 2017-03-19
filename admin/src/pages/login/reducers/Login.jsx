const initialState={
	test:"0"
};

function login(state=initialState,action)
{
	switch(action.type)
	{
		case "TEST":
			return Object.assign({},state,{
				test:"1"
			});
		default:
			return state;
	}

}

export default login;

let initialState={
	
};

export default function Breadcrumbs(state=initialState,action)
{
	switch(action)
	{
		case "TEST":
			return Object.assign({},state,{
				test:"a"
			});
		default:
			return state;
	}
}


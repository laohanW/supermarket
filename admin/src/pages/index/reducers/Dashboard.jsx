var initialState={

};


function Dashboard(state=initialState,action)
{
	switch(action)	
	{
		case "TEST":
			return	Object.Assign({},state,{
				test:'dashboard'
			});
		defaule:
			return state;
	}
}

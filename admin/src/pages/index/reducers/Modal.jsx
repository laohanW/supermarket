let initialState={
	
};
function Modal(state=initialState,action)
{
	switch(action.type)
	{
		case "MODAL_OPEN":
			return Object.assign({},state,{
				state:1,
				content:action.content
			});
		case "MODAL_CLOSE":
			return Object.assign({},state,{
				state:0
			});
		default:
			return state;
	}
}
export default Modal;

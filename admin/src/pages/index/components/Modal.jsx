import React from 'react';
import {connect} from 'react-redux';
class Modal extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	shouldComponentUpdate(dataProps,dataState)
	{
		return true;	
	}
	componentWillReceiveProps(nextProps)
	{
		console.log($('.myModal-lg'));
	}
	componentWillMount()
	{
		
	}
	render()
	{
		return(
			<div ref='modal' className='modal fade myModal-lg' tabIndex='-1' role='dialog' aria-labelledby='myMModal'>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						{this.props.content}
					</div>
				</div>
			</div>	
		);
	}
	componentDidMount()
	{
		
	}
	componentWillUnmount()
	{
		
	}
}
function mapStateToProps(state)
{
	console.log(state);
	return {
		content:state.Modal.content
	}	
}
export default connect(mapStateToProps)(Modal);

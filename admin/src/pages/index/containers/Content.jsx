import React from 'react';

class Content extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	shouldComponentUpdate(dataProps,dataState)
	{
		return true;	
	}
	componentWillReceiveProps()
	{
		
	}
	componentWillMount()
	{
		
	}
	render()
	{
		return(
			<div className='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>
				<h1 className='page-header'>Dashboard</h1>
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
export default Content;

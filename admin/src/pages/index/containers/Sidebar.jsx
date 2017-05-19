import React from 'react';

class  Sidebar extends React.Component
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
			<div className='col-sm-3 col-md-2 sidebar'>
				<ul className='nav nav-sidebar'>
					<li className='acive'>
						<a href="#">
							OverView
							<span className='sr-only'>current</span>
						</a>
					</li>
				</ul>
				<ul className='nav nav-sidebar'>
					<li className='acive'>
						<a href="#">
							Test
							<span className='sr-only'>current</span>
						</a>
					</li>
				</ul>
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
export default Sidebar;

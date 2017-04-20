import React from 'react';
import config from '../config';	
import {Link} from 'react-router-dom';
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
		let list=[];
		Object.values(config).forEach((o,i)=>{
			list.push(
				(<ul className='nav nav-sidebar' key={i}>
					<li>
						<Link to={o.link}>{o.name}</Link>
					</li>
				</ul>)
			);
		});
		return(
			<div className='col-sm-3 col-md-2 sidebar'>
				{
					list
				}
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

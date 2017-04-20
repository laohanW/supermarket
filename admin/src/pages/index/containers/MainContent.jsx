import React from 'react';
import {Route} from 'react-router-dom';
import config from '../config';
class MainContent extends React.Component
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
		Object.values(config).forEach((c,i)=>
		{
			list.push(
				(
					<Route path={c.link} component={c.pageComponent} key={i}/>
				)
			);		
		});
		return(
			<div  className='col-sm-9 col-md-10'>
				{list}
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
export default MainContent;

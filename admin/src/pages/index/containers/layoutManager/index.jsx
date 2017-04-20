import React from 'react';
import Banner from './Banner';
class LayoutManager extends React.Component
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
			<div>
				<div className="breadcrumb">
					<li className='breadcrumb-item active'>Home</li>
					<li className='breadcrumb-item'>config</li>
				</div>
				<div className="pageContent">
					<div className="pageHeader">
						<h1>layoutManager
							<small>layout of app home</small>
						</h1>							
					</div>
					<div className='row'>
						<div className='col-xs-12 col-sm-8'>
							<Banner  />						
						</div>
						<div className='col-xs-12 col-sm-4'>
							<div className='card'>
								<div className='card-header'>
					
								</div>
								<div className='card-block'>
									
								</div>
								<div className='card-footer'>
					
								</div>
							</div>		
						</div>
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
export default LayoutManager;

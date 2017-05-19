import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';

class Home extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	shouldComponentUpdate(dataProps,dataState)
	{
		
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
				<Navbar />
				<div className='container-fluid'> 
					<div className="row">
						<Sidebar />
						<Content />
					</div>
				</div>
				<Footer />
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
export default Home;

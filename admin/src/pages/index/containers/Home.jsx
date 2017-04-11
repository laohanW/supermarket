import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

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

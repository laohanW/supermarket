import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginActions from '../actions/Login';
class Navbar extends React.Component
{
	constructor(props)
	{
		super(props);
		this.onlogout=this.onlogout.bind(this);
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
	onlogout(){
		this.props.logoutAction();
		return false;
	}
	render()
	{
		return(
			<nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
				<h1 className='navbar-brand'>Navbar</h1>
				<div className='collapse navbar-collapse justify-content-lg-end'>
					<div className='navbar-nav'>
						<a className='nav-item nav-link active'>Home</a>
						<a className='nav-item nav-link'>message</a>
						<li>
							<a className='nav-item nav-link' href="javascript:void(0);" onClick={this.onlogout}>logout</a>
						</li>
					</div>
				</div>
			</nav>		
		);
	}
	componentDidMount()
	{
		
	}
	componentWillUnmount()
	{
		
	}
}
function mapStateToProps()
{
	return {
	
	};
}
function mapDispatchToProps(dispatch)
{
	return{
		...bindActionCreators(LoginActions,dispatch)
	};
}
export default connect(null,mapDispatchToProps)(Navbar);

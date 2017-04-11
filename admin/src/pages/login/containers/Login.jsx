import React from 'react';
import {connect} from 'react-redux';
import {loginAction,registerAction} from '../actions/Login';
import {bindActionCreators} from 'redux';
class Login extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			username:"",
			password:''
		};
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
	onRegister=()=>{
		this.props.registerAction(this.refs.username.value,this.refs.password.value);
	}
	onLogin=()=>
	{
		this.props.loginAction(this.refs.username.value,this.refs.password.value);
	}
	render()
	{
		return(
			<div className="container">
				<div  className="row">
					<div className="col"> 
						<div className="text-center">
							<h1>
								<i></i>
								<span>Ace</span>
								<span>Application</span>
							</h1>
							<h4>@ Company Name</h4>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className="col"></div>
					<div className="col">
						<div>
							<h4>
								<i /> 
								Please Enter Your Information
							</h4>
							<div className='space-6'/>
							<div>
								<div className='input-group'>
									<input type='text' className='form-control' placeholder='Username' aria-describedby='basic-addon1' ref='username'/>
									<span className='input-group-addon' id='basic-addon1'></span>
								</div>
								<div className='input-group'>
									<input type='password' className='form-control' placeholder='Password' aria-describedby='basic-addon2' ref='password'/>
									<span className='input-group-addon' id='basic-addon2'></span>
								</div>
								<div className='form-group row'>
									<div className='col-sm-10'>
										<div className='form-check'>
											<label className='form-check-label'>
												<input className='form-check-input' type='checkbox' />Remeber me
											</label>
										</div>
									</div>
								</div>
								<div className='form-group row'>
									<div className='offset-sm-2 col-sm-10'>
										<button type='submit' class='btn btn-primary' onClick={this.onLogin}>Sign in</button>
										<button type='submit' class='btn btn-primary' onClick={this.onRegister}>Register</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col"></div>
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
function mapStateToProps(state,ownProps)
{
	return {
	};
}
function mapDispatchToProps(dispatch)
{
	return {
		loginAction:bindActionCreators(loginAction,dispatch),
		registerAction:bindActionCreators(registerAction,dispatch)
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);

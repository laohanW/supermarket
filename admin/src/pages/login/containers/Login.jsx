import React from 'react';
import {rid,Row,Col} from 'react-bootstrap';
class Login extends React.Component
{
	static propTypes={
		
	};
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
			<Grid>
				<Row  className="justify-content-center">
					<Col xs={4} md={4}> 
						<div className="text-center">
							<h1>
								<i></i>
								<span>Ace</span>
								<span>Application</span>
							</h1>
							<h4>@ Company Name</h4>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={4} md={4}></Col>
					<Col xs={4} md={4}>
						<div>
							<h4>
								<i /> 
								Please Enter Your Information
							</h4>
							<div className='space-6'/>
							<form>
								<div className="form-group row">
									<label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
									<div className='col-sm-10'>
										<input type='email' class="form-control" id='inputEmail3' placeholder="email" />
									</div>
								</div>
								<div className="form-group row">
									<label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
									<div className='col-sm-10'>
										<input type='email' class="form-control" id='inputPassword3' placeholder="password" />
									</div>
								</div>
								<div className='form-group row'>
									<div className='col-sm-10'>
										<div className='form-check'>
											<label className='form-check-label'>
												<input className='form-check-input' type='checkbox' />Check me out
											</label>
										</div>
									</div>
								</div>
								<div className='form-group row'>
									<div className='offset-sm-2 col-sm-10'>
										<button type='submit' class='btn btn-primary'>Sign in</button>
									</div>
								</div>
							</form>
						</div>
					</Col>
					<Col xs={4} md={4}></Col>
				</Row>
			</Grid>

		);
	}
	componentDidMount()
	{
		
	}
	componentWillUnmount()
	{
		
	}
}
export default Login;

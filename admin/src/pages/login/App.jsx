import React from 'react';
import './App.scss';
import Login from './containers/Login';
import Register from './containers/Register';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import configureStore from './stores/configureStore';
class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.store=configureStore();
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
			<Provider store={this.store}>
				<BrowserRouter basename='/render/login'>
					<div>
						<Route exact path="/" component={Login} />
						<Route path="/register" component={Register} />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
	componentDidMount()
	{
		
	}
	componentWillUnmount()
	{
		
	}
}
export default App;

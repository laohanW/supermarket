import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import configureStore from './stores/configureStore';
import Home from './containers/Home';
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
				<BrowserRouter basename='/render'>
					<Route exact path='/' component={Home} />	
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

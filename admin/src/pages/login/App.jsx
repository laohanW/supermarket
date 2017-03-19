import React from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import Login from './containers/Login';
import configureStore from './store/configureStore';


const rootConfig={
	path:"/",
	component:Login,
	childRoute:require('./containers')
};
class App extends React.Component
{
	static propTypes={
		
	};
	constructor(props)
	{
		super(props);
		this.store=configureStore();
		console.log(this.store);
		this.history=createBrowserHistory();
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
				<Router history={this.history} routes={rootConfig}/>
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

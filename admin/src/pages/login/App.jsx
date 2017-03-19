import React from 'react';
import './App.scss';
import {Provider} from 'react-redux';
import {browserHistory,Router} from 'react-router';
import Login from './containers/Login';
import configureStore from './store/configureStore';


const rootConfig={
	path:"/",
	IndexRoute:{component:Login},
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
		console.log(browserHistory);
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
				<Router history={browserHistory} routes={rootConfig}/>
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

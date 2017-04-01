import ReactDOM from 'react-dom';
import React from 'react';

class Root extends React.Component
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
			<div>Hello world index</div>
		);
	}
	componentDidMount()
	{
		
	}
	componentWillUnmount()
	{
		
	}
}
ReactDOM.render(<Root />,document.getElementById('content'));

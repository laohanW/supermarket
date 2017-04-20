//{{{ import 
import React from 'react';
import {connect} from 'react-redux';
//}}}

//{{{ component
class Edit extends React.Component
{
	constructor(props)
	{
		super(props);
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
	render()
	{
		return(
			<div>
				
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
//}}}

//{{{ Main
class Banner extends React.Component
{
	constructor(props)
	{
		super(props);
		this._onChangeState=this._onChangeState.bind(this);
		this._onAdd=this._onAdd.bind(this);
		this.state={
			edit:false,
			editText:'edit'
		};
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
	_onChangeState()
	{
		if (this.state.edit)
		{
			this.setState({
				edit:false,
				editText:'preview'
			});
		}
		else{
			this.setState({
				edit:true,
				editText:'edit'
			});
		}
	}
	_onAdd()
	{
		this.props.dispatch({type:"MODAL_OPEN",content:(<div>asdwa</div>)});
	}
	render()
	{
		return(
			<div className='card'>
				<div className='card-header'>
					<div className='row'>
						<div className='col-xs-3 col-sm-4'>
							<h5>Banner</h5>
						</div>
						<div className='col-xs-9 col-sm-8'>
							<a href='javascript:void(0)' onClick={this._onChangeState}>{this.state.editText}</a>
						</div>
					</div>
				</div>
				<div className='card-block'>
					<h5>asdqfdsfsdvfdghfhgrtyty</h5>
				</div>
			{
				 (this.state.edit)?
				(
					<div className='card-footer'>
						<button className='btn btn-primary' data-toggle='modal' data-target='.myModal-lg'  aria-hidden='true' onClick={this._onAdd}>add</button>
					</div>
				):null
			}
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
export default connect()(Banner);
//}}}

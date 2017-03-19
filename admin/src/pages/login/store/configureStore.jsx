import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
function configureStore()
{
	let createMiddle=applyMiddleware(thunk,logger)(createStore);
	//let reducer=combineReducers(reducers);
	let store=createMiddle(reducer);
	return store;
}
export default configureStore;

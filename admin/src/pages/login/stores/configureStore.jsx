import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers';
export default function configureStore(history)
{
	const store=createStore(reducers,applyMiddleware(thunk));
	return store;
};

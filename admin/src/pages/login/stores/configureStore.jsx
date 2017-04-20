import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers';
export default function configureStore()
{
	//const store=createStore(reducers,applyMiddleware(thunk));
	const store=applyMiddleware(thunk)(createStore)(reducers);
	return store;
};

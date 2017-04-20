import {combineReducers} from 'redux';
import Login from './Login';
import Register from './Register';
const reducers=combineReducers({
	"Login":Login,
	"Register":Register
});
export default reducers;

import {combineReducers} from 'redux';
const reducers=combineReducers({
	Login:require("./Login"),
	Register:require("./Register")
});
export default reducers;

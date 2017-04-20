import {combineReducers} from 'redux';
import Breadcrumbs from './Breadcrumbs';
import Modal from './Modal';
var reducers=combineReducers({
//	nav:require('./Nav'),
//	sidebar:require('./Sidebar'),
	"Breadcrumbs":Breadcrumbs,
	"Modal":Modal
//	pageHeader:require('./PageHeader')
});
export default reducers;

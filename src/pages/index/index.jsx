import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import routeConfig from './route/route.jsx';
import './less/App.less';
ReactDOM.render(<Router history={browserHistory} routes={routeConfig}/>,document.getElementById('content'));

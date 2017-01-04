import App from '../component/App.jsx';
import Dashboard from '../content/Dashboard.jsx';
import LayoutManager from '../content/LayoutManager.jsx';
const routeConfig={
    path:'/',
    component:App,
    indexRoute:{component:Dashboard},
    childRoutes:[
        {
            path:'layoutManager',
            component:LayoutManager
        },
        {
            path:'dashboard',
            component:Dashboard
        }
    ]
};
export default routeConfig;

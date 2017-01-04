import React from 'react';
import {Layout} from 'antd';
import Heade from '../layout/Head.jsx';
import Foot from '../layout/Foot.jsx';
import Side from '../layout/Side.jsx';
const {Sider} =Layout;
export default class App extends React.Component
{
    render()
    {
        return(
           <Layout>
                <Heade />
                <Layout>
                    <Side router={this.props.router}/>
                    {this.props.children}
                </Layout>
                <Foot />
            </Layout>
        );
    }
}

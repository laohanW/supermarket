import React from 'react';
import {Layout,Breadcrumb} from 'antd';
import {Link} from 'react-router';
const {Content}=Layout;
export default class Dashboard extends React.Component
{
    render()
    {
        return(
            <Content>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to='/dashboard'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to='/layoutManager'>LayoutManager</Link></Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    content
                </div>
            </Content>
        );
    }
}

import React from 'react';
import {Layout,Breadcrumb} from 'antd';
import {Link} from 'react-router';
const {Content} =Layout;
export default class LayoutManager extends React.Component
{
    render()
    {
        return(
            <Content>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/dashboard">Home</Link></Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    LayoutManager
                </div>
            </Content>
        );
    }
}

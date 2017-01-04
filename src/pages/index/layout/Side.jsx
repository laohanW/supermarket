import React from 'react';
import {Layout,Menu,Icon} from 'antd';
import {Link,browserHistory} from 'react-router';
const {Sider} =Layout;
export default class Side extends React.Component
{
    onSelectItem(item)
    {
        this.props.router.push({pathname:'/'+item.key});
    }
    render()
    {
        return(
            <Sider collapsible collapsed>
                <div className='logo'>
                    <Menu mode='inline' defaultSelectKey={['1']} onSelect={this.onSelectItem.bind(this)}>
                        <Menu.Item key='dashboard'>
                            <Icon type='user' />
                            <span className='nav-text'>Dashboard</span>
                        </Menu.Item>
                        <Menu.Item key='layoutManager'>
                            <Icon type='user' />
                            <span className='nav-text'>LayoutManager</span>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <Icon type='user' />
                            <span className='nav-text'>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key='4'>
                            <Icon type='user' />
                            <span className='nav-text'>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key='5'>
                            <Icon type='user' />
                            <span className='nav-text'>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key='6'>
                            <Icon type='user' />
                            <span className='nav-text'>nav 1</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </Sider>
        );
    }
}

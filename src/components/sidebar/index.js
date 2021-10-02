import React from 'react';
import { Menu, Avatar} from 'antd';
import {
    UserOutlined,
} from '@ant-design/icons';

import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <Avatar 
                    icon={<UserOutlined />} 
                    size={{ xs: 24, sm: 32, md: 35, lg: 60, xl: 75, xxl: 90 }}
                />
                <span>CommsCRM</span>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Users (2)
                </Menu.Item>
            </Menu>
            
        </div>
    )
}

export default Sidebar;

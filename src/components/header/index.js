import React from 'react';
import { Layout, Button, Space, Badge} from 'antd';
import { LogoutOutlined, NotificationOutlined } from '@ant-design/icons';

import './header.scss';

const Header = () => {
    return (
        <Layout.Header className="" style={{ padding: 0, backgroundColor:'transparent'}}>
            <div className="container">
                <Space>     
                    <Badge count={5} size={'small'}>
                        <Button icon={<NotificationOutlined />} ghost type="primary" shape="circle"/>
                    </Badge>
                    <Button icon={<LogoutOutlined />} ghost type="primary" shape="circle"/>
                </Space>
            </div>
        </Layout.Header>
    )
}

export default Header;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Button, Space, Badge } from 'antd';
import { LogoutOutlined, NotificationOutlined } from '@ant-design/icons';

import './header.scss';
import { logout } from '../../redux/actions';

const Header = () => {
    const dispatch = useDispatch();
    // const menu = (
    //     <Menu>
    //       <Menu.Item key="1" onClick={() => dispatch(logout())}>
    //         logout
    //       </Menu.Item>
    //       <Menu.Item key="2">
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="http://www.taobao.com/"
    //         >
    //           2nd menu item
    //         </a>
    //       </Menu.Item>
    //       <Menu.Item key="3">
    //         <a
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           href="http://www.tmall.com/"
    //         >
    //           3rd menu item
    //         </a>
    //       </Menu.Item>
    //     </Menu>
    //   );
    return (
        <Layout.Header className="" style={{ padding: 0, backgroundColor:'transparent'}}>
            <div className="container">
                <Space>     
                    <Badge count={5} size={'small'}>
                        <Button icon={<NotificationOutlined />} ghost type="primary" shape="circle"/>
                    </Badge>
                    <Button 
                        icon={<LogoutOutlined />} 
                        ghost 
                        type="primary" 
                        shape="circle" 
                        onClick={() => dispatch(logout())}
                    />
                      {/* <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Avatar icon={<UserOutlined />} />
                      </Dropdown> */}
                </Space>
            </div>
        </Layout.Header>
    )
}

export default Header;

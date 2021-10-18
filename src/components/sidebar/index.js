import React from 'react';
import { Link } from "react-router-dom";
import { Menu, Avatar} from 'antd';
import {
    SettingOutlined,
    UserOutlined,
    CustomerServiceOutlined,
    FileTextOutlined,
    FileSyncOutlined,
    DashboardOutlined,
    TeamOutlined,
    SecurityScanOutlined
} from '@ant-design/icons';

import './sidebar.scss';

const { Item, SubMenu } = Menu;

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
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            
            <Item key="1" icon={<DashboardOutlined />}>
              <Link to="/dashboard" />
              Dashboard
            </Item>
            
            <Item key="2" icon={<UserOutlined/>}>
              <Link to="/dashboard/customer">Customer</Link>
            </Item>

            <SubMenu key="customer_services" icon={<CustomerServiceOutlined/>} title="Customer Services">

              <Item key="3" icon={<CustomerServiceOutlined />}>
                <Link to="#">NBN</Link>
              </Item>
              
              <Item key="4" icon={<FileTextOutlined />}>
                <Link to="#">SIP Services</Link>
              </Item>
              
              <Item key="5" icon={<SecurityScanOutlined />}>
                <Link to="#" />
                Security Services
              </Item>

            </SubMenu>

            <Item key="6" icon={<FileSyncOutlined />}>
              <Link to="/dashboard/fault" />
              Faults
            </Item>
            
            <Item key="7" icon={<FileSyncOutlined />}>
              <Link to="#" />
              Orders
            </Item>
            
            <Item key="8" icon={<FileSyncOutlined />}>
              <Link to="#" />
              Invoices
            </Item>
            
            <Item key="9" icon={<TeamOutlined />}>
              <Link to="#" />
              Admins Management
            </Item>
            
            <Item key="10" icon={<SettingOutlined />}>
              <Link to="#" />
              Settings
            </Item>
        </Menu>
      
        </div>
    )
}

export default Sidebar;

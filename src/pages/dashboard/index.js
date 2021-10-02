import React, { useState } from 'react';
import { Layout} from 'antd';


const { Sider } = Layout;

import Content from '../../components/content';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import Footer from '../../components/footer';

import './dashboard.scss';

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        console.log(collapsed);
        setCollapsed(!collapsed);
      };
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Sidebar/>
        </Sider>
        <Layout className="site-layout">
          <Header/>
          <Content/>
          <Footer/>
        </Layout>
      </Layout> 
      )
}

export default Dashboard;

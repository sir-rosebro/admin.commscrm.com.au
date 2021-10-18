import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Layout} from 'antd';

const { Sider } = Layout;

 import Sidebar from '../../components/sidebar';
// import Header from '../../components/header';
import Footer from '../../components/footer';

const DashboardLayout = ({children}) => {
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
          {/* <Header/> */}
            {children}
          <Footer/>
        </Layout>
      </Layout> 
      )
}

DashboardLayout.propTypes = {
    children: PropTypes.element,
}

export default DashboardLayout;

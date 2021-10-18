import React from "react";
import { 
  Layout,
  Row,
  Col,
  Card
} from 'antd';

import { 
  UserOutlined
} from '@ant-design/icons';


import DashboardLayout from "../../layouts/dashboardLayout";
import StatBox from "../../components/statBox";
import './dashboard.scss';


const Dashboard = () => {
    return (
      <DashboardLayout>
        <Layout.Content style={{ margin: '0 16px' }}>
         
        {/* <!--Stats view --> */}
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={6} className="custom-statcards">
            <Card
              bordered={false}
              className="sale"
              bodyStyle={{padding: '20px'}}
            >
              <StatBox icon={<UserOutlined/>} text="Total Sale" number="9541" />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6} className="custom-statcards">
            <Card
              bordered={false}
              className="order"
              bodyStyle={{padding: '20px'}}
            >
              <StatBox icon={<UserOutlined/>} text="New Order" number="9541" />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6} className="custom-statcards">
            <Card
              bordered={false}
              bodyStyle={{padding: '20px'}}
              className="user"
            >
              <StatBox icon={<UserOutlined/>} text="New User" number="9541" />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6} className="custom-statcards">
            <Card
              bordered={false}
              bodyStyle={{padding: '20px'}}
              className="visitor"
            >
              <StatBox icon={<UserOutlined/>} text="Unique Visitor" number="9541" />
            </Card>
          </Col>
        </Row>

        </Layout.Content>
      </DashboardLayout>
    )
}

export default Dashboard;

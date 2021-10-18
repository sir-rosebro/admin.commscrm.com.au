import React from "react";
import PropTypes from 'prop-types';
import { Layout } from "antd";

import HeaderContent from "../../components/header";
import SidePanel from "../../components/sidePanel";
import DashboardLayout from "../dashboardLayout";

const { Content } = Layout;

export default function CrudLayout({
  children,
  config,
  sidePanelTopContent,
  sidePanelBottomContent,
  fixHeaderPanel,
}) {
  return (
    <DashboardLayout>
      <Layout style={{ minHeight: "100vh" }}>
        <SidePanel
          config={config}
          topContent={sidePanelTopContent}
          bottomContent={sidePanelBottomContent}
          fixHeaderPanel={fixHeaderPanel}
        ></SidePanel>
        <Layout className="site-layout">
          <HeaderContent />
          <Content
            className="site-layout-background"
            style={{
              padding: "50px 40px",
              margin: "50px auto",
              width: "100%",
              maxWidth: "1000px",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </DashboardLayout>
  );
}

CrudLayout.propTypes = {
    children:PropTypes.element,
    config:PropTypes.array,
    sidePanelTopContent:PropTypes.element,
    sidePanelBottomContent:PropTypes.element,
    fixHeaderPanel:PropTypes.element
  }
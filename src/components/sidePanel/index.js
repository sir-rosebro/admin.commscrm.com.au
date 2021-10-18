import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
// import { useCrudContext } from "@/context/crud";
import { Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import CollapseBox from "../collapseBox";

const { Sider } = Layout;

export default function SidePanel({
  config,
  topContent,
  bottomContent,
  fixHeaderPanel,
}) {
  const { ADD_NEW_ENTITY } = config;
//   const { state, crudContextAction } = useCrudContext()
//const [panel, setisPanelCollapsed] = useState(false);
const [isBoxCollapsed] = useState(false);
 // const { isPanelCollapsed, isBoxCollapsed } = state;
const[isPanelOpen, setPanelOpen] = useState(true);
const [collapsedBox, setCollapsedBox] = useState(true);
// const { panel, collapsedBox } = crudContextAction;
  const [styleSider, setStyleSider] = useState("0px");
  const [opacitySider, setOpacitySider] = useState("1");

  useEffect(() => {
    if (isPanelOpen) {
      setStyleSider("-400px");
      setOpacitySider(0);
    } else {
      setStyleSider("0px");
      setOpacitySider(1);
    }

    setTimeout(() => {
      setStyleSider("0px");
      setOpacitySider(1);
    }, 300);
  }, [isPanelOpen]);

  const collapsePanel = () => {
    setCollapsedBox(true);
    setPanelOpen(false);
  };

  const collapsePanelBox = () => {
      setCollapsedBox(true);
    //collapsedBox.collapse();
  };
console.log(collapsedBox);
  return (
    <Sider
      trigger={<MenuOutlined className="trigger" />}
      width={400}
      collapsible
      collapsed={isPanelOpen}
      collapsedWidth={"0px"}
      onCollapse={collapsePanel}
      zeroWidthTriggerStyle={{
        right: "-50px",
        top: "15px",
      }}
      style={{
        background: "#FFF",
        left: styleSider,
        opacity: opacitySider,
      }}
    >
      {fixHeaderPanel}
      <CollapseBox
        buttonTitle={ADD_NEW_ENTITY}
        isPanelCollapsed={isPanelOpen}
        isCollapsed={isBoxCollapsed}
        onCollapse={collapsePanelBox}
        topContent={topContent}
        bottomContent={bottomContent}
      ></CollapseBox>
    </Sider>
  );
}
SidePanel.propTypes = {
  config: PropTypes.array,
  topContent:PropTypes.element,
  bottomContent:PropTypes.element,
  fixHeaderPanel:PropTypes.element,
}

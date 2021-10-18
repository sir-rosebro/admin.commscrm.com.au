import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";
import CollapseBox from "../collapseBox";
import {
  collapsePanel,
  collapseCollapsedBox
} from "../../redux/actions";

const { Sider } = Layout;

export default function SidePanel({
  config,
  topContent,
  bottomContent,
  fixHeaderPanel,
}) {

  const dispatch = useDispatch();
  const { ADD_NEW_ENTITY } = config;
  const { isPanelCollapsed, isBoxCollapsed } = useSelector(
    ({ ui }) => ui
);
  const [styleSider, setStyleSider] = useState("0px");
  const [opacitySider, setOpacitySider] = useState("1");

  useEffect(() => {
    if (isPanelCollapsed) {
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
  }, [isPanelCollapsed]);

  return (
    <Sider
      trigger={<MenuOutlined className="trigger" />}
      width={400}
      collapsible
      collapsed={isPanelCollapsed}
      collapsedWidth={"0px"}
      onCollapse={ () => dispatch(collapsePanel()) }
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
        isPanelCollapsed={isPanelCollapsed}
        isCollapsed={isBoxCollapsed}
        onCollapse={ () => dispatch(collapseCollapsedBox()) }
        topContent={topContent}
        bottomContent={bottomContent}
      ></CollapseBox>
    </Sider>
  );
}

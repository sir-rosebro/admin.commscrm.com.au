import React from "react";
import { Spin } from "antd";
import PropTypes from 'prop-types';

import { LoadingOutlined } from "@ant-design/icons";

export default function Loading({ isLoading, children }) {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <Spin indicator={antIcon} spinning={isLoading}>
      {children}
    </Spin>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
  children:PropTypes.element
}
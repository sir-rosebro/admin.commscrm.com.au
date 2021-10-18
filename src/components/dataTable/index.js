import React, { useCallback, useEffect, useState } from "react";
import { Dropdown, Button, PageHeader, Table } from "antd";
import PropTypes from 'prop-types';

import { EllipsisOutlined } from "@ant-design/icons";
// import { useSelector, useDispatch } from "react-redux";
// import { crud } from "@/redux/crud/actions";
// import { selectListItems } from "@/redux/crud/selectors";

// import uniqueId from "@/utils/uinqueId";

export default function DataTable({ config, DropDownRowMenu, AddNewItem }) {
  let { dataTableColumns, dataTableTitle } = config;
  dataTableColumns = [
    ...dataTableColumns,
    {
      title: "",
      render: function DropDownOptions(row) {
        return(
        <Dropdown overlay={DropDownRowMenu({ row })} trigger={["click"]}>
          <EllipsisOutlined style={{ cursor: "pointer", fontSize: "24px" }} />
        </Dropdown>
      )},
    },
  ];

  const [listResult, setResult] = useState([]);
  const [listIsLoading, setListIsLoading] = useState(true);
  // const { result: listResult, isLoading: listIsLoading } = useSelector(
  //   selectListItems
  // );

  const { pagination, items } = listResult;

 // const dispatch = useDispatch();

  const handelDataTableLoad = useCallback((pagination) => {
   // dispatch(crud.list(entity, pagination.current));
   console.log(pagination);
  }, []);

  useEffect(() => {
    setResult([]);
    setListIsLoading(false);
  //  dispatch(crud.list(entity));
  }, []);

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title={dataTableTitle}
        ghost={false}
        extra={[
          <Button onClick={handelDataTableLoad} key={`1`}>
            Refresh
          </Button>,
          <AddNewItem key={`2`} config={config} />,
        ]}
        style={{
          padding: "20px 0px",
        }}
      ></PageHeader>
      <Table
        columns={dataTableColumns}
        rowKey={(item) => item._id}
        dataSource={items}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
      />
    </>
  );
}

DataTable.propTypes = {
  config: PropTypes.array,
  DropDownRowMenu:PropTypes.element,
  AddNewItem:PropTypes.string
}
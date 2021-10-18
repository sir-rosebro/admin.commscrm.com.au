import React, {useCallback, useEffect} from "react";
import { 
  Button, 
  Menu, 
  Dropdown,
  PageHeader,
  Table,
  Badge
} from "antd";

import { 
  EyeOutlined, 
  EditOutlined, 
  DeleteOutlined,
  EllipsisOutlined,
  FileExcelOutlined,
  UserAddOutlined,
  ExportOutlined,
  DatabaseOutlined
  //FilePdfOutlined 
} from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";
import {
  getCustomers,
  setCurrentRead,
  setCurretEdit,
  openPanel,
  closeCollapsedBox,
  openCollapsedBox,
  openReadBox,
  openEditBox,
  openModal,
} from "../../redux/actions";

const dataTableColumns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Status",
      render: function tblStatusCell(row) {
        return (
          row.isApproved? (
            <Badge
            className="site-badge-count-109"
            count={'approved'}
            style={{ backgroundColor: '#52c41a' }}
          />
          ):(
            'not approved'
          )
        );
      }
    },
    {
        title: "",
        render: function tblDropDownCell (row) { return (
          <Dropdown overlay={DropDownRowMenu({ row })} trigger={["click"]}>
            <EllipsisOutlined style={{ cursor: "pointer", fontSize: "24px" }} />
          </Dropdown>
        )
      }, 
    }
  ];



const exportDropDown = () => {
  return (
    <Menu style={{ width: 130 }}>
      <Menu.Item key={`1`} icon={<FileExcelOutlined />}>
        .xlxs
      </Menu.Item>
      <Menu.Item key={`2`} icon={<DatabaseOutlined />}>
        .csv
      </Menu.Item>
    </Menu>
  );
}
function AddNewItem() {
  const dispatch = useDispatch();
  const handelClick = () => {
    dispatch(openPanel()); //bottomPanelContentOn
    dispatch(closeCollapsedBox());
  };

  return (
    <Button onClick={handelClick} type="primary">
      <UserAddOutlined />
    </Button>
  );
}
function DropDownRowMenu({ row }) {
  const dispatch = useDispatch();  
  console.log(row);
  //const item = useSelector(selectItemById(row.id));
  const Show = () => {
  dispatch(setCurrentRead(row));
   // dispatch(crud.currentItem(item));
   dispatch(openPanel());
   dispatch(openCollapsedBox());
   dispatch(openReadBox());
  };
  function Edit() {
    dispatch(setCurretEdit(row));
    dispatch(openEditBox());
    dispatch(openPanel());
    dispatch(openCollapsedBox());
  }
  function Delete() {
   // dispatch(crud.currentAction("delete", item));
  dispatch(openModal());
  }
  return (
    <Menu style={{ width: 130 }}>
      <Menu.Item key={`1`} icon={<EyeOutlined />} onClick={Show}>
        Show
      </Menu.Item>
      <Menu.Item key={`2`} icon={<EditOutlined />} onClick={Edit}>
        Edit
      </Menu.Item>
      <Menu.Item
        key={`3`}
        icon={<DeleteOutlined />}
        onClick={Delete}
      >
        Delete
      </Menu.Item>
    </Menu>
  );
}

 const CustomerDataTable = ({ config }) => {

      const { customers:{ list, pagination }, isFetching} = useSelector(
        ({customer}) => customer
      );
     // const { pagination, items } = listResult;
    
      const dispatch = useDispatch();
    
      const handelDataTableLoad = useCallback((pagination) => {
        console.log(pagination);
       // dispatch(crud.list(entity, pagination.current));
      }, []);
    
      useEffect(() => {
        dispatch(getCustomers());
      //  dispatch(crud.list(entity));
      }, []);
    
  return (
      <>
    <PageHeader
      onBack={() => window.history.back()}
      title={'Customers'}
      ghost={false}
      extra={[
        <Dropdown overlay={exportDropDown} trigger={["click"]} key={'4'}>
          <Button>
            Export <ExportOutlined />
          </Button> 
        </Dropdown>,
        <AddNewItem key={`2`} config={config} />,
      ]}
    style={{
        padding: "20px 0px",
      }}
  ></PageHeader>

  <Table
        columns={dataTableColumns}
        rowKey={(list) => list.id}
        dataSource={list}
        pagination={pagination}
        loading={isFetching}
        onChange={handelDataTableLoad}
    />
    </>
  );
}

export default CustomerDataTable;

import React, { useLayoutEffect} from "react";
import { Row, Col, Button, Layout } from "antd";
import { useDispatch } from 'react-redux';
import { PlusOutlined } from "@ant-design/icons";

import CustomerDataTable from '../../components/customerDataTable';
import CustomerForm from "../../forms/customerForm";
import CreateForm from "../../components/createForm";
import CustomerSidePanel from "../../components/customerSidePanel";
import UpdateForm from "../../components/updateForm";
import DeleteModal from "../../components/deleteModal";
import ReadItem from "../../components/readItem";
import SearchItem from "../../components/searchItem";
import DashboardLayout from "../../layouts/dashboardLayout";
import { 
  getCustomers,
  closeCollapsedBox 
} from '../../redux/actions';
import './customer.scss';

const { Content } = Layout;
const entity = "client";
const searchConfig = {
  displayLabels: ["company", "surname", "name"],
  searchFields: "company,surname,name",
  outputValue: "_id",
};

const panelTitle = "Customer Panel";
const dataTableTitle = "Customers Lists";
const entityDisplayLabels = ["company"];

const readColumns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Status",
    dataIndex: "isApproved",
  },
];
const dataTableColumns = [
  {
    title: "Company",
    dataIndex: "company",
  },
  {
    title: "Manager Surname",
    dataIndex: "surname",
  },
  {
    title: "Manager Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

const ADD_NEW_ENTITY = "Add new customer";
const DATATABLE_TITLE = "customers List";
const ENTITY_NAME = "customer";
const CREATE_ENTITY = "Create customer";
const UPDATE_ENTITY = "Update customer";
const config = {
  entity,
  panelTitle,
  dataTableTitle,
  ENTITY_NAME,
  CREATE_ENTITY,
  ADD_NEW_ENTITY,
  UPDATE_ENTITY,
  DATATABLE_TITLE,
  readColumns,
  dataTableColumns,
  searchConfig,
  entityDisplayLabels,
};

function SidePanelTopContent({config, formElements} ) {
  return (
    <>
      <ReadItem config={config} />
      <UpdateForm config={config} formElements={formElements} />
    </>
  );
}

function FixHeaderPanel({config, dispatch}) {
 
  const addNewItem = () => {
    dispatch(closeCollapsedBox());
  };
  return (
    <div className="box">
      <Row gutter={12}>
        <Col className="gutter-row" span={21}>
          <h1 style={{ fontSize: 20, marginBottom: 20 }}>
            {config.panelTitle}
          </h1>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col className="gutter-row" span={21}>
          <SearchItem config={config} />
        </Col>
        <Col className="gutter-row" span={3}>
          <Button
            onClick={addNewItem}
            block={true}
            icon={<PlusOutlined />}
          ></Button>
        </Col>
      </Row>
    </div>
  );
}

const Customer = () => {console.log(config);
  const dispatch = useDispatch();
  
  useLayoutEffect(() => {
    dispatch(getCustomers());
    //dispatch(crud.resetState()); //FIRE RESET ACTION
  }, []);

  return (
    <DashboardLayout>
      <Layout style={{ minHeight: "100vh" }}>
        <CustomerSidePanel
          config={config}
          topContent={ 
            <SidePanelTopContent 
              config={config} 
              formElements={ <CustomerForm isUpdateForm={true}/> } 
            />
          }
          bottomContent={<CreateForm config={config} formElements={<CustomerForm />} />}
          fixHeaderPanel={<FixHeaderPanel dispatch={dispatch} config={config}/>}
        >  
        </CustomerSidePanel>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              padding: "50px 40px",
              margin: "50px auto",
              width: "100%",
              maxWidth: "1000px",
            }}
          >
            <CustomerDataTable config={config} />
            <DeleteModal config={config} />
          </Content>
        </Layout>
      </Layout>
    </DashboardLayout>
  )
}

export default Customer;
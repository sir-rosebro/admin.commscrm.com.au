import React, { useLayoutEffect } from "react";
import { Row, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';

import CreateForm from "../../components/createForm";
import UpdateForm from "../../components/updateForm";
import DeleteModal from "../../components/deleteModal";
import ReadItem from "../../components/readItem";
import SearchItem from "../../components/searchItem";

// import { useDispatch } from "react-redux";
// import { crud } from "@/redux/crud/actions";
// import { useCrudContext } from "@/context/crud";

import CraudLayout from "../../layouts/crudLayout";
import CrudDataTable from "./crudDataTable";

function SidePanelTopContent({ config, formElements }) {
  return (
    <>
      <ReadItem config={config} />
      <UpdateForm config={config} formElements={formElements} />
    </>
  );
}

function FixHeaderPanel({ config }) {
//   const { crudContextAction } = useCrudContext();
//   const { collapsedBox } = crudContextAction;

  const addNewItem = () => {
    // collapsedBox.close();
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

export default function CrudModule({ config, createForm, updateForm }) {
  //const dispatch = useDispatch();

  useLayoutEffect(() => {
   // dispatch(crud.resetState());
  }, []);

  return (
    <CraudLayout
      config={config}
      fixHeaderPanel={<FixHeaderPanel config={config} />}
      sidePanelBottomContent={
        <CreateForm config={config} formElements={createForm} />
      }
      sidePanelTopContent={
        <SidePanelTopContent config={config} formElements={updateForm} />
      }
    >
      <CrudDataTable config={config} />
      <DeleteModal config={config} />
    </CraudLayout>
  );
}


CrudModule.propTypes = {
  config: PropTypes.array,
  createForm:PropTypes.element,
  updateForm:PropTypes.element
}

FixHeaderPanel.propTypes = {
  config: PropTypes.array,
  // formElements:PropTypes.element
}

SidePanelTopContent.propTypes = {
  config: PropTypes.array,
  formElements:PropTypes.element
}

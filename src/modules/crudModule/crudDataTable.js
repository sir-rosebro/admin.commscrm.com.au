import React from "react";
import PropTypes from 'prop-types';
import { Button, Menu } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { useSelector, useDispatch } from "react-redux";
// import { crud } from "@/redux/crud/actions";
// import { selectItemById } from "@/redux/crud/selectors";
// import { useCrudContext } from "@/context/crud";
//
import DataTable from "../../components/dataTable";

function AddNewItem() {
  // const { crudContextAction } = useCrudContext();
  // const { collapsedBox, panel } = crudContextAction;
  const  ADD_NEW_ENTITY  = 'Add new Item';
  const handelClick = () => {
    // panel.open();
    // collapsedBox.close();
  };

  return (
    <Button onClick={handelClick} type="primary">
      {ADD_NEW_ENTITY}
    </Button>
  );
}
function DropDownRowMenu() {

//   const dispatch = useDispatch();
//   const { crudContextAction } = useCrudContext();
//   const { panel, collapsedBox, modal, readBox, editBox } = crudContextAction;
//   const item = useSelector(selectItemById(row._id));
  const Show = () => {
    // dispatch(crud.currentItem(item));
    // panel.open();
    // collapsedBox.open();
    // readBox.open();
  };
  function Edit() {
    // dispatch(crud.currentAction("update", item));
    // editBox.open();
    // panel.open();
    // collapsedBox.open();
  }
  function Delete() {
    // dispatch(crud.currentAction("delete", item));
    // modal.open();
  }
  return (
    <Menu style={{ width: 130 }}>
      <Menu.Item key={`2`} icon={<EyeOutlined />} onClick={Show}>
        Show
      </Menu.Item>
      <Menu.Item key={`1`} icon={<EditOutlined />} onClick={Edit}>
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

export default function CrudDataTable({ config }) {
  return (
    <DataTable
      config={config}
      DropDownRowMenu={DropDownRowMenu}
      AddNewItem={AddNewItem}
    />
  );
}

CrudDataTable.propTypes = {
  config: PropTypes.array,
}
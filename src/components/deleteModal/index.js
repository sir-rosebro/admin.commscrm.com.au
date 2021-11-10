import React, { useEffect} from "react";
import { Modal } from "antd";

import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  deleteCustomer,
 // getCustomers
} from "../../redux/actions";


export default function DeleteModal({ config }) {
  
  const dispatch = useDispatch();
  let {
    deleteMessage = "Do you want delete : ",
    modalTitle = "Remove Item",
  } = config;
 
  const { current: { delete: { current: { id }, isFetching, isSuccess } }} = useSelector(
    ({customer}) => customer
  );
  
  const { isModalOpen } = useSelector(
    ({ ui }) => ui
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(closeModal());
      //dispatch(getCustomers());
    }
  }, [isSuccess, id]);

  const handleOk = () => {
    dispatch(deleteCustomer({id}));
  };
  const handleCancel = () => {
    if (!isFetching) dispatch(closeModal());
  };
  return (
    <Modal
      title={modalTitle}
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={isFetching}
    >
      <p>
        {deleteMessage}
        {id}
      </p>
    </Modal>
  );
}

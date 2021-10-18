import React, { useEffect, useState } from "react";
import { Modal } from "antd";

import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from "react-redux";
// import { crud } from "@/redux/crud/actions";
// import { useCrudContext } from "@/context/crud";
// import { selectDeletedItem } from "@/redux/crud/selectors";

//import { valueByString } from "@/utils/helpers";

export default function DeleteModal({ config }) {
  let {
    //entity,
    entityDisplayLabels,
    deleteMessage = "Do you want delete : ",
    modalTitle = "Remove Item",
  } = config;
 const [isSuccess, setIsSucces] = useState(true);
 const [isModalOpen, setModalOpen] = useState(false);
 const [isLoading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const { current, isLoading, isSuccess } = useSelector(selectDeletedItem);
//   const { state, crudContextAction } = useCrudContext();
//   const { isModalOpen } = state;
//   const { modal } = crudContextAction;
//   const [displayItem, setDisplayItem] = useState("");
  const displayItem = entityDisplayLabels;
  useEffect(() => {
    if (isSuccess) {
    //   modal.close();
    //   dispatch(crud.list(entity));
    //   dispatch(crud.resetAction(entity));
    }
    // if (current) {
    //   let labels = entityDisplayLabels
    //     .map((x) => valueByString(current, x))
    //     .join(" ");

    //   setDisplayItem(labels);
    // }
  }, [isSuccess]);

  const handleOk = () => {
      console.log('handleOk hit');
      setIsSucces(!isSuccess);
      setModalOpen(false);
      setLoading(false);
    // const id = current._id;
    // dispatch(crud.delete(entity, id));
  };
  const handleCancel = () => {
    if (!isLoading) 
     console.log('modal should be closed!!');
    //modal.close();
  };
  return (
    <Modal
      title={modalTitle}
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={isLoading}
    >
      <p>
        {deleteMessage}
        {displayItem}
      </p>
    </Modal>
  );
}

DeleteModal.propTypes = {
  config: PropTypes.object,
}

import React, { useEffect } from "react";
// import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
//import { selectUpdatedItem } from "@/redux/crud/selectors";

import { Button, Form } from "antd";
import {
  openPanel,
  openCollapsedBox,
  openReadBox,
  updateCustomer
} from "../../redux/actions";

import Loading from "../loading";

export default function UpdateForm({ formElements }) {
  const dispatch = useDispatch();

  const { current: { edit: { current, isFetching, isSuccess }}} = useSelector(
    ({ customer }) => customer
);

  const [form] = Form.useForm();

  const onSubmit = (fieldsValue) => {
    
    const id = current.id;
    

    dispatch(updateCustomer({ id, fieldsValue }));
   // dispatch(crud.update(entity, id, fieldsValue));
  };
  useEffect(() => {
    if (current) {
      form.setFieldsValue(current);
    }
  }, [current]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(openReadBox());
      dispatch(openCollapsedBox());
      dispatch(openPanel());
      form.resetFields();
      // dispatch(crud.list(entity));
    }
  }, [isSuccess]);

  const { isEditBoxOpen } = useSelector(
    ({ui}) => ui
  );
  const show = isEditBoxOpen
    ? { display: "block", opacity: 1 }
    : { display: "none", opacity: 0 };
  return (
    <div style={show}>
      <Loading isLoading={isFetching}>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          {formElements}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Loading>
    </div>
  );
}

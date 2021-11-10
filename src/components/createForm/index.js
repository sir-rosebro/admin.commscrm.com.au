import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";


import { Button, Form } from "antd";
import Loading from "../loading";
import { createCustomer } from "../../redux/actions/customer";
import {
  openPanel,
  openCollapsedBox,
  openReadBox
} from "../../redux/actions";

export default function CreateForm({ config, formElements }) {
  let { entity } = config;
  const dispatch = useDispatch();
  console.log(entity, dispatch);
  const {current:{create:{isFetching, isSuccess}}} = useSelector(
    ({ customer }) => customer
);
//   const {panel, collapsedBox, readBox} = useSelector(
//     ({ ui }) => ui
// );

  const [form] = Form.useForm();
  const onSubmit = (fieldsValue) => {
    dispatch(createCustomer(fieldsValue));
 //  dispatch(crud.create(entity, fieldsValue));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(openReadBox());
      dispatch(openCollapsedBox());
      dispatch(openPanel());
      form.resetFields();
     // dispatch(crud.resetAction("create"));
     // dispatch(crud.list(entity));
    }
  }, [isSuccess]);

  return (
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
  );
}

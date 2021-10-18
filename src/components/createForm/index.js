import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";


import { Button, Form } from "antd";
import Loading from "../loading";

export default function CreateForm({ config, formElements }) {
  let { entity } = config;
  const dispatch = useDispatch();
  console.log(entity, dispatch);
  const {current:{create:{isFetching, isSuccess}}} = useSelector(
    ({ customer }) => customer
);
  const {panel, collapsedBox, readBox} = useSelector(
    ({ ui }) => ui
);

  const [form] = Form.useForm();
  const onSubmit = (fieldsValue) => {
    if (fieldsValue) {
      if (fieldsValue.birthday) {
        fieldsValue = {
          ...fieldsValue,
          birthday: fieldsValue["birthday"].format("DD/MM/YYYY"),
        };
      }
      if (fieldsValue.date) {
        fieldsValue = {
          ...fieldsValue,
          date: fieldsValue["date"].format("DD/MM/YYYY"),
        };
      }
    }

   // dispatch(crud.create(entity, fieldsValue));
  };

  useEffect(() => {
    if (isSuccess) {
      readBox.open();
      collapsedBox.open();
      panel.open();
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

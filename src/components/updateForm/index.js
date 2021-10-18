import React, { useEffect } from "react";
// import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
//import { selectUpdatedItem } from "@/redux/crud/selectors";

import { Button, Form } from "antd";
import {
  openPanel,
  openCollapsedBox,
  openReadBox
} from "../../redux/actions";

import Loading from "../loading";

export default function UpdateForm({ config, formElements }) {
  console.log(config);
  const dispatch = useDispatch();


  const { isFetching, isSuccess, current:{ edit }} = useSelector(
    ({customer}) => customer
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
          birthday: fieldsValue["date"].format("DD/MM/YYYY"),
        };
      }
    }

    // const id = current._id;
    // console.log(id);
   // dispatch(crud.update(entity, id, fieldsValue));
  };
  useEffect(() => {
    if (edit) {
      // if (current.birthday) {
      //   current.birthday = dayjs(current.birthday);
      // }
      // if (current.date) {
      //   current.date = dayjs(current.date);
      // }
      form.setFieldsValue(edit);
    }
  }, [edit]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(openReadBox());
      dispatch(openCollapsedBox());
      dispatch(openPanel());
      form.resetFields();
      // dispatch(crud.resetAction("update"));
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

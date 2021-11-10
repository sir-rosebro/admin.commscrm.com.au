import React from "react";
import { Form, Input } from "antd";
import PropTypes from 'prop-types';
import Password from "antd/lib/input/Password";

export default function CustomerForm({ isUpdateForm = false }) {
  return (
    <>
      {
        isUpdateForm && (
          <Form.Item
            label="ID"
            name="id" 
          >
            <Input disabled/>
          </Form.Item>
        )
      }    
      
      <Form.Item
        label="Name"
        name="contactName"
        rules={[
          {
            required: true,
            message: "Please enter your name.",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "please email valid email ID.",
          },
          {
            required: true,
            message: "Please enter your email.",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingRight: "5px",
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password.",
          }
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Password />
      </Form.Item>

      <Form.Item
        name="billingAddress"
        label="Address"
        rules={[
          {
            required: true,
            message: "Please enter your address.",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}


CustomerForm.propTypes = {
  isUpdateForm: PropTypes.bool,
}
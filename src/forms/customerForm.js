import React from "react";
import { Form, Input } from "antd";
import PropTypes from 'prop-types';

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
        name="name"
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
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please enter your address.",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
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
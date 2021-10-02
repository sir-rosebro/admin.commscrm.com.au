import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button} from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import './resetPassword.scss';
import { resetPassword } from '../../redux/actions';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const PasswordResetForm = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { loading, currentUser, errorMessage, token, successMessage } = useSelector(
        ({ auth }) => auth
    );
    console.log(loading, currentUser, errorMessage, token, successMessage);
    const onFinish = ({password}) => {
        const qs = new URLSearchParams(location.search);
        const token = qs.get('paswordResetToken')
        const email = qs.get('email');
        dispatch(resetPassword({email, newPassword:password, token}));
    };

  return (
    <div className="password_reset">
         <div className="header_text">
            <h1>CommsCRM</h1>
            <small className="admin_text">Admin</small>
            </div>
        { successMessage ? (
            <div className="successMsg">
                <img src="/img/success.png" alt="success" />
                <p>{ successMessage }</p>
                <Link className="login_link" to="/sign-in">
                    Login to CommsCRM
                </Link>
            </div>
        ):(
            <Form
                name="password-reset"
                className="pasword_reset_form"
                size={'large'}
                onFinish={onFinish}
            >
                {errorMessage && (<p className="errorMsg">{errorMessage}</p>)}
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message:
                                'Please enter your password',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="New Password"/>
                </Form.Item>
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message:
                                'Please enter your password again.',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue(
                                        'password'
                                    ) === value
                                ) {
                                    return Promise.resolve();
                                }
    
                                return Promise.reject(
                                    new Error(
                                        'The password you have entered does not match!'
                                    )
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Retype new passoword"/>
                </Form.Item>
    
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn_password_reset" disabled={loading}>
                    Change Passoword
                    <ArrowRightOutlined/>
                    </Button>
                </Form.Item>
            </Form>
        
        )} 
    </div>
 );
};

export default PasswordResetForm;
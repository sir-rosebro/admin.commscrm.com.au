import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useToken } from '../../hooks/useToken';

import './signin.scss';
import { signIn } from '../../redux/actions';

const SignIn = () => {
    const dispatch = useDispatch();
    const [, setToken] = useToken();
    const history = useHistory();
    const { loading, loggedInUser} = useSelector(
        ({ auth }) => auth
    );
    console.log(loading, loggedInUser);
  
    const onFinish = (values) => {
        dispatch(signIn(values));
    };

    useEffect(() => {
        if (loggedInUser) {
            setToken(loggedInUser.token);
            history.push('/dashboard');
        }
    }, [loggedInUser]);

    return (
        <div className="sign_in">
            <div className="login_header">
                <h1>CommsCRM</h1>
                <p>login as Admin</p>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                size="large"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
             
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                        <ArrowRightOutlined />
                    </Button>
                    <Link className="login_form_forgot" to="/forgot-password">
                        Forgot password?
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignIn;

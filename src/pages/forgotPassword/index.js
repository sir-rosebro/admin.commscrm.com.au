import React, { useRef, useState } from "react";
import {Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRightOutlined } from '@ant-design/icons';

import { forgotPassword } from "../../redux/actions";
import './forgotPassword.scss';

const ForgotPassword = () => {
    const [isEmailValid, setEmailValid] = useState(true);
    const forgotPasswordErrorText = `The email you have entered is not registered with us. Please enter the correct email.`;
    const forgotPasswordText = `Please enter the email address you registerd your account with. We
                                    will send you reset password confirmation to this email.`;
    const dispatch = useDispatch();
    const { loading, currentUser, errorMessage, token } = useSelector(
        ({ auth }) => auth
    );
    const emailInputRef = useRef();
    console.log(loading, currentUser, errorMessage, token);
    const onFinish = () => {
        setEmailValid(validateEmail(emailInputRef.current.value))
        if (isEmailValid) {
            dispatch(forgotPassword({email:emailInputRef.current.value}));
        } else {
            return;
        }
    };
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    return (
        <div className="forgotPassword">
            <div className="formWrapper">
                <div className="header_text">
                    <h1>CommsCRM</h1>
                    <small className="admin_text">Admin</small>
                </div>
                
                <p className={isEmailValid?'forgotPasswordText':'errorMsg'}>
                  {
                      isEmailValid ? forgotPasswordText : forgotPasswordErrorText
                  }
                </p>
                
                <div style={{ overflow: 'hidden' }} className="forgotPasswordInput">
                    <input placeholder="Email" ref={emailInputRef}/>
                    <Button 
                        type="primary" 
                        shape="circle" 
                        icon={<ArrowRightOutlined/>} 
                        onClick={onFinish}
                    />
                </div>
                
                {
                    !isEmailValid && (
                        <div style={{textAlign: "left", color:"red"}} className="validationMsg">
                            <p>Please enter the valid email ID.</p>
                        </div>
                    )
                }
                   
            </div>  
        </div>
    )
}

export default ForgotPassword;

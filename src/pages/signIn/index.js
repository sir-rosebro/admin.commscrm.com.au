//src/pages/SignIn.jsx
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions';

import './signIn.scss';

const SignIn = () => {
    useSignIn();
    return (
        <h2>SignIn</h2>
    );
}

function useSignIn() {
    const dispatch = useDispatch();
    const { signningIn, currentUser, errorMessage } = useSelector(({auth}) => auth);
    const signInUser = useCallback((data) =>  dispatch(signIn(data)), []); 
    console.log({signningIn, currentUser, errorMessage});
    
    useEffect(() => {
        signInUser({username: 'heubert', password: '123'});
    }, [signInUser]);
}

export default SignIn;
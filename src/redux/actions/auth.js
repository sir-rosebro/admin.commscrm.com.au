//src/redux/actions/Auth.js
import { authActionTypes } from '../actionTypes';

export const signIn = (payload) => {
    return {
        type: authActionTypes.SIGN_IN,
        payload
    }
}

export const signInSuccess = (payload) => {
    return {
        type: authActionTypes.SIGN_IN_SUCCESS,
        payload
    }
}

export const signInFail = (payload) => {
    return {
        type: authActionTypes.SIGN_IN_FAIL,
        payload
    }
}
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


export const forgotPassword = (payload) => {
    return {
        type:authActionTypes.FORGOT_PASSWORD,
        payload
    }
}

export const forgotPasswordFail = (payload) => {
    return {
        type:authActionTypes.FORGOT_PASSWORD_FAIL,
        payload
    }
}

export const forgotPasswordSuccess = (payload) => {
    return {
        type:authActionTypes.FORGOT_PASSWORD_SUCCESS,
        payload
    }
}

export const resetPassword = (payload) => {
    return {
        type:authActionTypes.RESET_PASSWORD,
        payload
    }
}

export const resetPasswordFail = (payload) => {
    return {
        type:authActionTypes.RESET_PASSWORD_FAIL,
        payload
    }
}

export const resetPasswordSuccess = (payload) => {
    return {
        type:authActionTypes.RESET_PASSWORD_SUCCESS,
        payload
    }
}
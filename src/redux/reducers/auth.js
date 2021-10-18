// src/redux/reducers/Auth.js
import { authActionTypes } from '../actionTypes';

const inititalState = {
    loading: false,
    errorMessage: '',
    loggedInUser: null,
}

const auth = (state = inititalState, action) => {
    switch(action.type) {
        case authActionTypes.SIGN_IN:
            return {
                ...state,
                loading: true
            }
        case authActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedInUser: action.payload
        }
        case authActionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
        }
        case authActionTypes.FORGOT_PASSWORD:
        return {
            ...state,
            loading: true,
        };
        case authActionTypes.FORGOT_PASSWORD_FAIL:    
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        case authActionTypes.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case authActionTypes.RESET_PASSWORD:
            return {
                ...state,
                loading: true,
        };
        case authActionTypes.RESET_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
        };
        case authActionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage:action.payload,
        };
        case authActionTypes.LOGOUT:
            localStorage.removeItem('auth_admin_token');
            return {
                ...state,
                loading: false,
                loggedInUser: null,
        };
        default: 
            return state;
    }
}

export default auth;
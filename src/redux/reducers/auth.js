// src/redux/reducers/Auth.js
import { authActionTypes } from '../actionTypes';

const inititalState = {
    signningIn: false,
    errorMessage: '',
    loggedInUser: null,
}

const auth = (state = inititalState, action) => {
    switch(action.type) {
        case authActionTypes.SIGN_IN:
            return {
                ...state,
                signningIn: true
            }
        case authActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                signningIn: false,
                loggedInUser: action.payload
        }
        case authActionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                signningIn: false,
                errorMessage: action.payload
        }
        default: 
            return state;
    }
}

export default auth;
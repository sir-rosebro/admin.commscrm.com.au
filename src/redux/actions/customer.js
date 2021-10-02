import { customerActionTypes } from '../actionTypes';

export const getCustomers = (payload) => {
    return {
        type: customerActionTypes.GET_CUSTOMERS,
        payload
    }
}

export const getCustomersSuccess = (payload) => {
    return {
        type: customerActionTypes.GET_CUSTOMERS_SUCCESS,
        payload
    }
}

export const getCustomersFailure = (payload) => {
    return {
        type: customerActionTypes.GET_CUSTOMERS_FAILURE,
        payload
    }
}
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

export const approveCustomer = (payload) => {
    return {
        type: customerActionTypes.APPROVE_CUSTOMER,
        payload
    }
}

export const approveCustomerSuccess = (payload) => {
    return {
        type: customerActionTypes.APPROVE_CUSTOMER_SUCCESS,
        payload
    }
}

export const approveCustomerFailure = (payload) => {
    return {
        type: customerActionTypes.APPROVE_CUSTOMER_FAILURE,
        payload
    }
}

export const setCurrentRead = (payload) => {
    return {
        type: customerActionTypes.SET_CURRENT_READ,
        payload
    }
}

export const setCurretEdit = (payload) => {
    return {
        type: customerActionTypes.SET_CURRENT_EDIT,
        payload
    }
}

export const setCurrentDelete = (payload) => {
    return {
        type: customerActionTypes.SET_CURRENT_DELETE,
        payload
    }
}

export const searchCustomer = (payload) => {
    return {
        type: customerActionTypes.SEARCH_CUSTOMER,
        payload
    }
}

export const searchCustomerSuccess = (payload) => {
    return {
        type: customerActionTypes.SEARCH_CUSTOMER_SUCCESS,
        payload
    }
}

export const searchCustomerFailure = (payload) => {
    return {
        type: customerActionTypes.SEARCH_CUSTOMER_FAILURE,
        payload
    }
}

export const createCustomer = (payload) => {
    return {
        type: customerActionTypes.CREATE_CUSTOMER,
        payload
    }
}

export const createCustomerSuccess = (payload) => {
    return {
        type: customerActionTypes.CREATE_CUSTOMER_SUCCESS,
        payload
    }
}

export const createCustomerFailure = (payload) => {
    return {
        type: customerActionTypes.CREATE_CUSTOMER_FAILURE,
        payload
    }
}

export const deleteCustomer = (payload) => {
    return {
        type: customerActionTypes.DELETE_CUSTOMER,
        payload
    }
}

export const deleteCustomerSuccess = (payload) => {
    return {
        type: customerActionTypes.DELETE_CUSTOMER_SUCCESS,
        payload
    }
}

export const deleteCustomerFailure = (payload) => {
    return {
        type: customerActionTypes.DELETE_CUSTOMER_FAILURE,
        payload
    }
}

export const updateCustomer = (payload) => {
    return {
        type: customerActionTypes.UPDATE_CUSTOMER,
        payload
    }
}

export const updateCustomerSuccess = (payload) => {
    return {
        type: customerActionTypes.UPDATE_CUSTOMER_SUCCESS,
        payload
    }
}

export const updateCustomerFailure = (payload) => {
    return {
        type: customerActionTypes.UPDATE_CUSTOMER_FAILURE,
        payload
    }
}
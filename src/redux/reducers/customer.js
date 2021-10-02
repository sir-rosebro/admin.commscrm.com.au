import { customerActionTypes } from '../actionTypes';

const inititalState = {
    loading: false,
    errorMessage: '',
    customers: [],
}

const customer = (state = inititalState, action) => {
    switch(action.type) {
        case customerActionTypes.GET_CUSTOMERS:
            return {
                ...state,
                loading: true
            }
        case customerActionTypes.GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: action.payload
        }
        case customerActionTypes.GET_CUSTOMERS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
        }
        default: 
            return state;
    }
}

export default customer;
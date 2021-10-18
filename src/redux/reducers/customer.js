import { customerActionTypes } from '../actionTypes';
const initialKeyState = {
    result: null,
    current: null,
    isFetching: false,
    isSuccess: false,  
}
const inititalState = {
    customers: {
        list:[],
        pagination: {
            current:1,
            pageSize:10,
            total:1
        },
        isFetching: false,
        isSuccess: false,
    },
    current: {
        edit:null,
        read:null,
        delete:initialKeyState,
        create:initialKeyState
    },
    search:{
        ...initialKeyState, result: []
    }
}

const customer = (state = inititalState, action) => {
    switch(action.type) {
        case customerActionTypes.GET_CUSTOMERS:
            return {
                ...state,
                isFetching: true,
                isSuccess: false,
            }
        case customerActionTypes.GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isSuccess: true,
                customers: {
                    list:action.payload
                }
        }
        case customerActionTypes.GET_CUSTOMERS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
        }
        case customerActionTypes.APPROVE_CUSTOMER:
            return {
                ...state,
                loading:true
        }
        case customerActionTypes.APPROVE_CUSTOMER_FAILURE:
            return {
                ...state,
                loading:false
        }
        case customerActionTypes.APPROVE_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading:false
        }
        case customerActionTypes.SET_CURRENT_READ:
            return {
                ...state,
                current: {
                    ...state.current,
                    read:action.payload
                }
        }
        case customerActionTypes.SET_CURRENT_EDIT:
            return {
                ...state,
                current: {
                    ...state.current,
                    edit:action.payload
            }
        }
        case customerActionTypes.SEARCH_CUSTOMER:
            return {
                ...state,
                search: {
                    ...state.search,
                    isFetching:true
                }
        }
        case customerActionTypes.SEARCH_CUSTOMER_SUCCESS:
            return {
                ...state,
                search : {
                    ...state.search,
                    isFetching:false,
                    isSuccess:true,
                    result:action.payload
                }
        }
        case customerActionTypes.SEARCH_CUSTOMER_FAILURE:
            return {
                ...state,
                search : {
                    isFetching:false,
                    isSuccess:false
                }
        }
        case customerActionTypes.CREATE_CUSTOMER:
            return {
                ...state,
                current: {
                    ...state.current,
                    create: {
                        ...state.current.create,
                        isFetching:true
                    }
                }
            }
        case customerActionTypes.CREATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                
                current: {
                    ...state.current,
                    create: {
                        ...state.current.create,
                        isFetching:false,
                        isSuccess:true
                    }
                }
            }
        default: 
            return state;
    }
}

export default customer;
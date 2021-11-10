import { customerActionTypes } from '../actionTypes';
const initialKeyState = {
    result: null,
    current: {},
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
        edit:initialKeyState,
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
                customers: {
                    ...state.customers,
                    isFetching: true,
                    isSuccess: false,
                }
            }
        case customerActionTypes.GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    list:action.payload.customers,
                    pagination:action.payload.pagination,
                    isFetching: true,
                    isSuccess: false,
                }
        }
        case customerActionTypes.GET_CUSTOMERS_FAILURE:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    loading: false,
                    isSuccess:false
                }
        }
        case customerActionTypes.APPROVE_CUSTOMER:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    isFetching: true,
                }
        }
        case customerActionTypes.APPROVE_CUSTOMER_FAILURE:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    isFetching: false,
                }
        }
        case customerActionTypes.APPROVE_CUSTOMER_SUCCESS:  
        return {
                ...state,
                customers: {
                    ...state.customers,
                    list: state.customers.list.map(customer => customer.id === parseInt(action.payload)? {
                        ...customer,
                        isApproved:true,
                    } : customer),
                    isFetching: false
            }
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
                    edit:{
                        ...state.current.edit,
                        current:action.payload
                    }
            }
        }
        case customerActionTypes.SET_CURRENT_DELETE:
            return {
                ...state,
                current: {
                    ...state.current,
                    delete:{
                        ...state.current.delete,
                        current:action.payload
                    }
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
                customers: {
                    ...state.customers,
                    list: [action.payload, ...state.customers.list]
                },
                current: {
                    ...state.current,
                    create: {
                        ...state.current.create,
                        isFetching:false,
                        isSuccess:true
                    }
                }
            }
        case customerActionTypes.CREATE_CUSTOMER_FAILURE:
            return {
                ...state,
                current: {
                    ...state.current,
                    create: {
                        ...state.current.create,
                        isFetching:false
                    }
                }
            }
        case customerActionTypes.DELETE_CUSTOMER:
            return {
                ...state,
                current: {
                    ...state.current,
                    delete: {
                        ...state.current.delete,
                        isFetching:true,
                        isSuccess:false
                    }
                }
            }
        case customerActionTypes.DELETE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    list: state.customers.list.filter( customer => customer.id !== parseInt(action.payload))
                },
                current: {
                    ...state.current,
                    delete: {
                        ...state.current.delete,
                        isFetching:false,
                        isSuccess:true
                    }
                }
            }
        case customerActionTypes.DELETE_CUSTOMER_FAILURE:
            return {
                ...state,
                current: {
                    ...state.current,
                    delete: {
                        ...state.current.delete,
                        isFetching:false,
                        isSuccess:false
                    }
                }
            }
        case customerActionTypes.UPDATE_CUSTOMER:
            return {
                ...state,
                current: {
                    ...state.current,
                    edit: {
                        ...state.current.edit,
                        isFetching:true,
                        isSuccess:false
                    }
                }
            }
        case customerActionTypes.UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customers: {
                    ...state.customers,
                    list: state.customers.list.map( customer => customer.id === action.payload.id? (
                        { ...customer, ...action.payload}
                        ):(
                        customer
                        )  
                    )
                },
                current: {
                    ...state.current,
                    edit: {
                        ...state.current.edit,
                        isFetching:false,
                        isSuccess:true
                    }
                }
            }
        case customerActionTypes.UPDATE_CUSTOMER_FAILURE:
            return {
                ...state,
                current: {
                    ...state.current,
                    edit: {
                        ...state.current.delete,
                        isFetching:false,
                        isSuccess:false
                    }
                }
            }
        default: 
            return state;
    }
}

export default customer;
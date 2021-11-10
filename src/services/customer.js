import fetch from "../shared/interceptors/fetch";

export const getCustomers = async(payload) =>{
    return fetch({
        url: `/customer/all?page=${payload.current}&size=${payload.pageSize}`,
        method: 'GET',
        data: payload,
    });
}

export const approveCustomer = async(payload) =>{
    
    return fetch({
        url: `/customer/approve-customer/${payload.id}`,
        method: 'PUT',
        data: payload,
    });
}

export const createCustomer = async(payload) =>{
    
    return fetch({
        url: `/auth/sign-up`,
        method: 'POST',
        data: payload,
    });
}

export const deleteCustomer = async(payload) =>{
    
    return fetch({
        url: `/customer/${payload.id}`,
        method: 'DELETE',
        data: payload,
    });
}

export const updateCustomer = async(payload) =>{
    
    return fetch({
        url: `/customer/update/${payload.id}`,
        method: 'PUT',
        data: payload,
    });
}



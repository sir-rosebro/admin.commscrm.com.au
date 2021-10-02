import fetch from "../shared/interceptors/fetch";

export const getCustomers = async(payload) =>{
    
    return fetch({
        url: '/customer/all',
        method: 'GET',
        data: payload,
    });
}

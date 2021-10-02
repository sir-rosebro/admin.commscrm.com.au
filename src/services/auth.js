import fetch from "../shared/interceptors/fetch";

export const signIn = async(payload) =>{
    
    return fetch({
        url: '/auth/signin',
        method: 'POST',
        data: payload,
    });
}

export const forgotPassword = async(payload) =>{
    
    return fetch({
        url: 'auth/forgot-password',
        method: 'POST',
        data: payload,
    });
}

export const resetPassword = async(payload) =>{
    
    return fetch({
        url: '/auth/reset-password',
        method: 'POST',
        data: payload,
    });
}
// srv/services/Auth.js
import fetch from "../shared/interceptors/fetch";

export const signIn = async(payload) =>{
    
    return fetch({
        url: 'auth/sign-in',
        method: 'POST',
        data: payload,
    });
}

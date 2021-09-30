// src/shared/interceptors/fetch
import axios from 'axios';

import { API_BASE_URL } from '../../configs/AppConfig';
import { authActionTypes } from '../../redux/actionTypes'; 

const service = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000
});

service.interceptors.request.use(config => {
    const jwtToken = localStorage.getItem(authActionTypes.AUTH_TOKEN);

    if(jwtToken) {
        config.headers[authActionTypes.TOKEN_PAYLOAD_KEY] = jwtToken;
    }

    return config;
}, error => {
    Promise.reject(error);
});

service.interceptors.response.use((response) => {
    return response.data;
}, error => {
    Promise.reject(error)
});


export default service;
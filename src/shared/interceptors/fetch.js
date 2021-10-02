import axios from 'axios';

import { API_BASE_URL } from '../../configs/appConfig';
import { AUTH_ADMIN_TOKEN, TOKEN_PAYLOAD_KEY } from '../../constants';

const service = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000,
});

service.interceptors.request.use(
    (config) => {
        const jwtToken = localStorage.getItem(AUTH_ADMIN_TOKEN);

        if (jwtToken) {
            config.headers[TOKEN_PAYLOAD_KEY] = jwtToken;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
       return error.response.data;
        //Promise.reject(error);
    }
);

export default service;

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
        return error.response.data;
    }
);

service.interceptors.response.use(
    (response) => {// Any status code from range of 2xx
        return response.data;
    },
    (error) => { // Any status codes outside range of 2xx
        switch (error.response.status) {
            case 401:
              // Handle Unauthorized calls here
              // Display an alert
              break;
            case 404:
              return {
                message: 'Server Error [404], Could not locate the specified resource.',
                status: 'ERROR',
              };
            case 500:
              // Handle 500 here
              break;
            // and so on..
            default:
                return {
                    message:error.response.statusText,
                    status:'ERROR'
                }
          }
       return error.response.data;
    }
);

export default service;

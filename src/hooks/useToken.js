import { useState } from 'react';
import { AUTH_ADMIN_TOKEN } from '../constants';

export const useToken = () => {
    const [token, setTokenInternal] = useState(() => {
        return localStorage.getItem(AUTH_ADMIN_TOKEN);
    });
    const setToken = (newToken) => {
        if (newToken) {
            localStorage.setItem(AUTH_ADMIN_TOKEN, newToken);
            setTokenInternal(newToken);
        }
    };

    return [token, setToken];
};

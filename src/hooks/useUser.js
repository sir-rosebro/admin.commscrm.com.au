import { useState, useEffect } from 'react';
import { useToken } from './useToken';

export const useUser = () => {
    const [token] = useToken();

    const getUserPayloadFormToken = (token) => {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    };

    const [user, setUser] = useState(() => {
        if (token) {
            return getUserPayloadFormToken(token);
        } else {
            return null;
        }
    });

    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(getUserPayloadFormToken(token));
        }
    }, [token]);

    return user;
};

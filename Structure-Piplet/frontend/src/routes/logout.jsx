import React, { useEffect } from 'react';

export default function Logout() {

    localStorage.removeItem('jwtToken');

    useEffect(() => {
        window.location.href = '/login';
    }, []);

    return null;
}
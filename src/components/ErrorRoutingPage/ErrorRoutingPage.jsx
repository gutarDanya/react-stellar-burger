import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ErrorRoutingPage = () => {

    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname.includes('react-stellar-burger')) {
            navigate('/')
        }
    }, [])

    return(
        <h1 style={{
            lineHeight: 60,
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '100%'
        }}>Данная страница не доступна
        </h1>
    )
}
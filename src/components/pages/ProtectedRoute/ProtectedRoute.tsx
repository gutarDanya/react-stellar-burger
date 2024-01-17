import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../../../utils/auth";
import { authUser, refreshToken } from "../../../services/actions/AuthAction";

export const ProtectedRoute: React.FC<{ children: any, anonymous?: boolean }> = ({ children, anonymous = false }) => {

    const userLogined = sessionStorage.getItem('logined');
    const location = useLocation();
    const from = location.state?.from || '/'

    if(anonymous && userLogined) {
        return <Navigate to={from} />
    }

    if(!anonymous && !userLogined) {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return (
        children
    )
}
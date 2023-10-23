import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCookie } from "../../utils/auth";
import { authUser, refreshToken } from "../../services/actions/AuthAction";

export const ProtectedRoute = ({children}) => {

    const userLogined = sessionStorage.getItem('logined');
    
    return (
        userLogined
        ? children
        : <Navigate to='/login' />
    )
}
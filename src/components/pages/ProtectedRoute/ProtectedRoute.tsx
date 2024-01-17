import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../../../utils/auth";
import { authUser, refreshToken } from "../../../services/actions/AuthAction";

export const ProtectedRoute: React.FC<{children: any}> = ({children}) => {

    const userLogined = sessionStorage.getItem('logined');
    const location = useLocation();
    
    return (
        userLogined === 'true'
        ? children
        : <Navigate to='/login'/>
    )
}
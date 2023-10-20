import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({element}) => {

    const userLogined = useSelector(state => state.userInfoReduecer.login)
    
    return userLogined ? element : <Navigate to="/login" replace/>
}
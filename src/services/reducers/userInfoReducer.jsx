import React from "react";
import { GET_USER_INFO } from "../actions/AuthAction";

const initialState = {
    name: null,
    email: null,
    password: null,
    success: false
}

export const userInfoReduecer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO: {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                success: action.payload.success
            }
        }
        default: return state
    }
}
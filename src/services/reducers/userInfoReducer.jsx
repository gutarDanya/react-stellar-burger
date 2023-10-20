import React from "react";
import { GET_USER_INFO } from "../actions/AuthAction";

const initialState = {
    name: null,
    email: null,
    password: null
}

export const userInfoReduecer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO: {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        }
        default: return state
    }
}
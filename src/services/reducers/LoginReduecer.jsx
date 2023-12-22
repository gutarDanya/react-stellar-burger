import React from "react";

import { LOGIN_ACTION, LOGOUT_ACTION } from "../actions/AuthAction";

const initialState = {
    login: true,
    logout: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION : {
            return {
                ...state,
                login: action.payload,
                logout: !action.payload
            }
        }
        case LOGOUT_ACTION : {
            return {
                ...state,
                login: !action.payload,
                logout: action.payload
            }
        }
        default: return state
    }
}
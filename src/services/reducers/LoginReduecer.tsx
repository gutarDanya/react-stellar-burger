import React from "react";
import { AuthActions } from "../actions/AuthAction";

import { LOGIN_ACTION, LOGOUT_ACTION } from "../actions/AuthAction";

const initialState: IInitialState = {
    login: true,
    logout: false
}

export const loginReducer = (state = initialState, action: AuthActions) => {
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

interface IInitialState {
    login: boolean;
    logout: boolean;
}
import React from "react";
import { AuthActions, CLEAR_STATE_LOGIN_REDUCER } from "../../actions/AuthAction";

import { LOGIN_ACTION, LOGOUT_ACTION } from "../../actions/AuthAction";

export const initialState: IInitialState = {
    login: true,
    logout: false
}

export const loginReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case LOGIN_ACTION : {
            return {
                ...state,
                login: true,
                logout: false
            }
        }
        case LOGOUT_ACTION : {
            return {
                ...state,
                login: false,
                logout: true
            }
        }

        case CLEAR_STATE_LOGIN_REDUCER : {
            return initialState
        }

        default: return state
    }
}

interface IInitialState {
    login: boolean;
    logout: boolean;
}
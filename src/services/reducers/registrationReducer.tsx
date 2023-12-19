import React from "react";
import { REGISTARTION_ACTION } from "../actions/AuthAction";
import { AuthActions } from "../actions/AuthAction";

const initialState: IInitialState = {
    success: false
}

export const registrationReducer = (state = initialState, action: AuthActions) => {
    switch(action.type) {
        case REGISTARTION_ACTION : {
            return {
                ...state,
                success: action.payload.success
            }
        }
        default: return state
    }
}

interface IInitialState {
    success: boolean
}
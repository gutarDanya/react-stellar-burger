import React from "react";
import { CLEAR_STATE_REGISTRATION_REDUCER, REGISTARTION_ACTION } from "../../actions/AuthAction";
import { AuthActions } from "../../actions/AuthAction";

export const initialState: IInitialState = {
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

        case CLEAR_STATE_REGISTRATION_REDUCER: {
            return initialState
        }
        default: return state
    }
}

interface IInitialState {
    success: boolean
}
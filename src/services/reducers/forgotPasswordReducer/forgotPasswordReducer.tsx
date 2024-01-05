import React from "react";
import { CHANGE_VALUE_OF_FORGOT, CLEAR_STATE_FORGOT_PASSWORD_REDUCER, GET_REQUEST_OF_FORGOT_PASSWORD } from "../../actions/forgotPasswordAction";
import { TforgotPasswordActions } from "../../actions/forgotPasswordAction";

export const initialState: IInitialState = {
    success: false,
    currentValue: 'somethink'
}

export const forgotPasswordReducer = (state = initialState, action: TforgotPasswordActions): IInitialState => {
    switch (action.type) {
        case GET_REQUEST_OF_FORGOT_PASSWORD: {
            return {
                ...state,
                success: action.payload.success
            }
        }
        case CHANGE_VALUE_OF_FORGOT: {
            return {
                ...state,
                currentValue: action.payload
            }
        }
        case CLEAR_STATE_FORGOT_PASSWORD_REDUCER: {
            return {
                success: false,
                currentValue: 'somethink'
            }
        }
        default: return state
    }
}

interface IInitialState {
    success: boolean;
    currentValue: string;
}
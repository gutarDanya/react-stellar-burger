import React from "react";
import { CHANGE_VALUE_OF_RESET, GET_REQUEST_OF_FORGOT_PASSWORD } from "../actions/forgotPasswordAction";

const initialState = {
    request: {},
    currentValue: 'somethink'
}

export const forgotPasswordReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_REQUEST_OF_FORGOT_PASSWORD : {
            return {
                ...state,
                request: action.payload
            }
        }
        case CHANGE_VALUE_OF_RESET: {
            return {
                ...state,
                currentValue: action.payload
            }
        }
        default: return state
    }
}
import React from "react";
import { REGISTARTION_ACTION } from "../actions/AuthAction";

const initialState = {
    success: false
}

export const registrationReducer = (state = initialState, action) => {
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
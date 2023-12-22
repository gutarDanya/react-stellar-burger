import React from "react";
import { SET_EMAIL_VALUE, SET_NAME_VALUE, SET_PASSWORD_VALUE, SET_RESET_MESSAGE } from "../actions/inputAction";

const initialState = {
    emailValue: '',
    nameValue: '',
    passwordValue: '',
    resetMessage: ''
}

export const inputReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMAIL_VALUE: {
            return {
                ...state,
                emailValue: action.payload
            }
        }
        case SET_NAME_VALUE: {
            return {
                ...state,
                nameValue: action.payload
            }
        }
        case SET_PASSWORD_VALUE: {
            return {
                ...state,
                passwordValue: action.payload
            }
        }
        case SET_RESET_MESSAGE: {
            return {
                ...state,
                resetMessage: action.payload
            }
        }
        default: return state
    }
}
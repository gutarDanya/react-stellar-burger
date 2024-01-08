import React from "react";
import { CLEAR_STATE_INPUT_REDUCER, SET_EMAIL_VALUE, SET_NAME_VALUE, SET_PASSWORD_VALUE, SET_RESET_MESSAGE } from "../../actions/inputAction";
import { TInputsActions } from "../../actions/inputAction";

export const initialState: IInitialState = {
    emailValue: '',
    nameValue: '',
    passwordValue: '',
    resetMessage: ''
}

export const inputReducer = (state = initialState, action: TInputsActions) : IInitialState => {
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
        case CLEAR_STATE_INPUT_REDUCER: {
            return initialState
        }
        default: return state
    }
}

interface IInitialState {
    emailValue: string;
    nameValue: string;
    passwordValue: string;
    resetMessage: string;
}
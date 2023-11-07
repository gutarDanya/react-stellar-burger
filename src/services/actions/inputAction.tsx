import React from "react";

export const SET_EMAIL_VALUE: 'SET_EMAIL_VALUE' = 'SET_EMAIL_VALUE';
export const SET_NAME_VALUE: 'SET_NAME_VALUE' = 'SET_NAME_VALUE';
export const SET_PASSWORD_VALUE: 'SET_PASSWORD_VALUE' = 'SET_PASSWORD_VALUE';
export const SET_RESET_MESSAGE: 'SET_RESET_MESSAGE' = 'SET_RESET_MESSAGE'

export const setEmailValue = (value: string) => {
    return{type: SET_EMAIL_VALUE, payload: value}
}

export const setNameValue = (value: string) => {
    return{type: SET_NAME_VALUE, payload: value}
}

export const setPasswordValue = (value: string) => {
    return{type: SET_PASSWORD_VALUE, payload: value}
}

export const setResetMessage = (message: string) => {
    return{type: SET_RESET_MESSAGE, payload: message}
}

interface IsetEmailValue {
    readonly type: typeof SET_EMAIL_VALUE;
    payload: string
}

interface IsetNameValue {
    readonly type: typeof SET_NAME_VALUE;
    payload: string
}

interface IsetPasswordValue {
    readonly type: typeof SET_PASSWORD_VALUE;
    payload: string
}

interface IsetResetMessage {
    readonly type: typeof SET_RESET_MESSAGE;
    payload: string
}

export type TInputsActions = IsetEmailValue |
IsetNameValue |
IsetPasswordValue | 
IsetResetMessage;
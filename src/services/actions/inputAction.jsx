import React from "react";

export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';
export const SET_NAME_VALUE = 'SET_NAME_VALUE';
export const SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE';
export const SET_RESET_MESSAGE = 'SET_RESET_MESSAGE'

export const setEmailValue = (value) => {
    return{type: SET_EMAIL_VALUE, payload: value}
}

export const setNameValue = (value) => {
    return{type: SET_NAME_VALUE, payload: value}
}

export const setPasswordValue = (value) => {
    return{type: SET_PASSWORD_VALUE, payload: value}
}

export const setResetMessage = (message) => {
    return{type: SET_RESET_MESSAGE, payload: message}
}
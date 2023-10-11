import React from "react";
import { baseUrl, checkResponse } from "../../utils/constants";

export const GET_REGISTRATION_RESPONSE = 'GET_REGISTRATION_RESPONSE';
export const GET_NAME_OF_USER_FROM_REGISTRATION = 'GET_NAME_OF_USER_FROM_REGISTRATION';
export const GET_LOGIN_OF_USER_FROM_REGISTRATION = 'GET_LOGIN_OF_USER_FROM_REGISTRATION';
export const GET_PASSWORD_OF_USER_FROM_REGISTRATION = 'GET_PASSWORD_OF_USER_FROM_REGISTRATION';

//НИЖЕ ГЕНЕРАТОРЫ ЭКШЕНОВ ДЛЯ РЕГИСТРАЦИИ

export const getNameOfUserRegistration = (name) => {
    return{type: GET_NAME_OF_USER_FROM_REGISTRATION, payload: name}
};

export const getLoginUserRegistration = (login) => {
    return{type: GET_LOGIN_OF_USER_FROM_REGISTRATION, payload: login}
};

export const getPasswordUserRegistration = (password) => {
    return{type: GET_PASSWORD_OF_USER_FROM_REGISTRATION, payload: password}
};

//ОТПРАВКА ДАННЫХ ДЛЯ РЕГИСТРАЦИИ

export const getRegistrationRequest = (value) => {
    return function (dispatch) {
        fetch(`${baseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": value.email,
                'password': value.password,
                'name': value.name
            })
        })
        .then(checkResponse)
        .then((status) => {
            dispatch({
                type: GET_REGISTRATION_RESPONSE,
                payload: status
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
};

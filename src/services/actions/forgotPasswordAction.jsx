import React from "react";
import { baseUrl } from "../../utils/constants";
import { checkResponse } from "../../utils/constants";

export const GET_REQUEST_OF_FORGOT_PASSWORD = 'GET_REQUEST_OF_FORGOT_PASSWORD';
export const CHANGE_VALUE_OF_RESET = 'CHANGE_VALUE_OF_RESET';


export const getResponse = (answer) => {
    return{type: GET_REQUEST_OF_FORGOT_PASSWORD, payload: answer}
}


export const getRequestPassword = (email) => {
    return function (dispatch) {
        fetch(`${baseUrl}/password-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email
            })
        })
        .then(checkResponse)
        .then((status) => {
            dispatch({
                type: GET_REQUEST_OF_FORGOT_PASSWORD,
                payload: status
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
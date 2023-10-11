import React from "react";
import { baseUrl, checkResponse } from "../../utils/constants";

export const GET_REQUEST_OF_LOGIN = 'GET_REQUEST_OF_LOGIN';

export const getAuthorizationRequest = (data) => {
    return function(dispatch) {
        fetch(`${baseUrl}/auth/login`, {
            type: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': data.email,
                'paswword': data.paswword
            })
        })
        .then(checkResponse)
        .then((status) => {
            dispatch({
                type: GET_REQUEST_OF_LOGIN,
                payload: status
            })
        })
        .catch((err => {
            console.log(err)
        }))
    }
}
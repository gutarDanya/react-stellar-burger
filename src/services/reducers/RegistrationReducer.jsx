import React from "react";
import { GET_REGISTRATION_RESPONSE } from "../actions/RegistrationAction";

const initialState = {
    'email': '',
    'password': '',
    'name': '',
    accessToken: ''
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGISTRATION_RESPONSE: {
            return {
                ...state,
                accessToken: action.payload['accessToken']
            }
        }
        default: return state
    }
}
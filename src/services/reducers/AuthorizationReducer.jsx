import React from "react";
import { GET_REQUEST_OF_LOGIN } from "../actions/AuthorizationAction";

const initialState = {
success: false,
accessToken: ''
}

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUEST_OF_LOGIN: {
            return {
                ...state,
                succes: action.payload["success"],
                accessToken: action.payload["accessToken"]
            }
        }
        default: return state
    }
}
import React from "react";
import { GET_USER_INFO } from "../actions/AuthAction";
import { AuthActions } from "../actions/AuthAction";

const initialState: IInitialState = {
    name: '',
    email: '',
    password: '',
    success: false
}

export const userInfoReduecer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case GET_USER_INFO: {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                success: action.payload.success
            }
        }
        default: return state
    }
}

interface IInitialState {
    name: string;
    email: string;
    password: string;
    success: boolean
}
import React from "react";
import { GET_CURRENT_INGREDIENT_TO_MODAL, REMOVE_CUURENT_INGREDIENT_FROM_MODAL, OPEN_INFO_MODAL_WINDOW, CLOSE_INFO_MODAL_WINDOW } from '../actions/currentIngredientsToModalAction'

const initialState = {
    currentIngredient: [],
    modalWindowOpened: false,
    orderedIngredient: []
}

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_INGREDIENT_TO_MODAL : {
            return {
                ...state,
                currentIngredient: action.payload
            }
        }
        case REMOVE_CUURENT_INGREDIENT_FROM_MODAL : {
            return {
                ...state,
                currentIngredient: {}
            }
        }
        case OPEN_INFO_MODAL_WINDOW : {
            return {
                ...state,
                modalWindowOpened: true,
                currentIngredient: action.payload
            }
        }
        case CLOSE_INFO_MODAL_WINDOW : {
            return {
                ...state,
                modalWindowOpened: false,
                orderedIngredient: null
            }
        }
        default : return state
    }
}
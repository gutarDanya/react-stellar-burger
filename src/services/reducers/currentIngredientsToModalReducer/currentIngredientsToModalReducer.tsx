import React from "react";
import { GET_CURRENT_INGREDIENT_TO_MODAL, REMOVE_CUURENT_INGREDIENT_FROM_MODAL, OPEN_INFO_MODAL_WINDOW, CLOSE_INFO_MODAL_WINDOW, INGREDIENT_MODAL_WINDOW_OPENED } from '../../actions/currentIngredientsToModalAction'
import { TIngredientObject } from "../../../utils/constantsOfTS";
import { TCurrentIngredientToModalActions } from "../../actions/currentIngredientsToModalAction";

const initialState: IInitialState = {
    currentIngredient: {},
    modalWindowOpened: false,
    orderedIngredient: {},
    opened: false
}

export const currentIngredientReducer = (state = initialState, action: TCurrentIngredientToModalActions) => {
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
        case INGREDIENT_MODAL_WINDOW_OPENED: {
            return {
                ...state,
                opened: !state.opened
            }
        }
        default : return state
    }
}

interface IInitialState {
    currentIngredient: TIngredientObject | {};
    modalWindowOpened: boolean;
    orderedIngredient: {};
    opened: boolean;
};
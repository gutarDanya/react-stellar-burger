import React from "react";
import { OPEN_INFO_MODAL_WINDOW,  CLEAR_INITIAL_STATE_CURRENT_INGREDIENT_TO_MODAL } from '../../actions/currentIngredientsToModalAction'
import { TIngredientObject } from "../../../utils/constantsOfTS";
import { TCurrentIngredientToModalActions } from "../../actions/currentIngredientsToModalAction";

export const initialState: IInitialState = {
    currentIngredient: {},
    modalWindowOpened: false,
    opened: false
}

export const currentIngredientReducer = (state = initialState, action: TCurrentIngredientToModalActions) => {
    switch (action.type) {
        case OPEN_INFO_MODAL_WINDOW: {
            return {
                ...state,
                modalWindowOpened: true,
                currentIngredient: action.payload
            }
        }
        case CLEAR_INITIAL_STATE_CURRENT_INGREDIENT_TO_MODAL: {
            return {
                currentIngredient: {},
                modalWindowOpened: false,
                opened: false
            }
        }
        default: return state
    }
}

interface IInitialState {
    currentIngredient: TIngredientObject | {};
    modalWindowOpened: boolean;
    opened: boolean;
};
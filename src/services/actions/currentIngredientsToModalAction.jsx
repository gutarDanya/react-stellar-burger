import { ingredientPropType } from "../../utils/prop-types";

export const OPEN_INFO_MODAL_WINDOW = 'OPEN_INFO_MODAL_WINDOW';
export const CLOSE_INFO_MODAL_WINDOW = 'CLOSE_INFO_MODAL_WINDOW'

export const GET_CURRENT_INGREDIENT_TO_MODAL = 'GET_CURRENT_INGREDIENT_TO_MODAL';
export const REMOVE_CUURENT_INGREDIENT_FROM_MODAL = 'REMOVE_CUURENT_INGREDIENT_FROM_MODAL'

export const getCurrentIngredientGenerator = (ingredient) => {
    return {type: GET_CURRENT_INGREDIENT_TO_MODAL, payload: ingredient}
}

export const removeCurrentIngredientGenerator = () => {
    return {type: REMOVE_CUURENT_INGREDIENT_FROM_MODAL}
}

export const openInfoModalWindow = (ingredient) => {
    return {type: OPEN_INFO_MODAL_WINDOW, payload: ingredient}
}

export const closeInfoModalWindow = () => {
    return {type: CLOSE_INFO_MODAL_WINDOW}
}
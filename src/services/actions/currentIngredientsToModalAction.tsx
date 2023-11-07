import { TIngredientObject } from "../../utils/constantsOfTS";
import { ingredientPropType } from "../../utils/prop-types";

export const OPEN_INFO_MODAL_WINDOW: 'OPEN_INFO_MODAL_WINDOW' = 'OPEN_INFO_MODAL_WINDOW';
export const CLOSE_INFO_MODAL_WINDOW: 'CLOSE_INFO_MODAL_WINDOW' = 'CLOSE_INFO_MODAL_WINDOW'

export const GET_CURRENT_INGREDIENT_TO_MODAL: 'GET_CURRENT_INGREDIENT_TO_MODAL' = 'GET_CURRENT_INGREDIENT_TO_MODAL';
export const REMOVE_CUURENT_INGREDIENT_FROM_MODAL: 'REMOVE_CUURENT_INGREDIENT_FROM_MODAL' = 'REMOVE_CUURENT_INGREDIENT_FROM_MODAL'

export const INGREDIENT_MODAL_WINDOW_OPENED: 'INGREDIENT_MODAL_WINDOW_OPENED' = 'INGREDIENT_MODAL_WINDOW_OPENED';

export const getCurrentIngredientGenerator = (ingredient: TIngredientObject) => {
    return {type: GET_CURRENT_INGREDIENT_TO_MODAL, payload: ingredient}
}

export const removeCurrentIngredientGenerator = () => {
    return {type: REMOVE_CUURENT_INGREDIENT_FROM_MODAL}
}

export const openInfoModalWindow = (ingredient: TIngredientObject) => {
    return {type: OPEN_INFO_MODAL_WINDOW, payload: ingredient}
}

export const closeInfoModalWindow = () => {
    return {type: CLOSE_INFO_MODAL_WINDOW}
}

export const ingredientModalWindowOpened = () => {
    return {type: INGREDIENT_MODAL_WINDOW_OPENED}
}

interface IgetCurrentIngredientGenerator {
    readonly type: typeof GET_CURRENT_INGREDIENT_TO_MODAL;
    payload: TIngredientObject
};

interface IremoveCurrentIngredientGenerator {
    readonly type: typeof REMOVE_CUURENT_INGREDIENT_FROM_MODAL;
};

interface IopenInfoModalWindow {
    readonly type: typeof OPEN_INFO_MODAL_WINDOW;
    payload: TIngredientObject
};

interface IcloseInfoModalWindow {
    readonly type: typeof CLOSE_INFO_MODAL_WINDOW;
}

interface IingredientModalWindowOpened {
    readonly type: typeof INGREDIENT_MODAL_WINDOW_OPENED;
}

export type TCurrentIngredientToModalActions = IgetCurrentIngredientGenerator |
IremoveCurrentIngredientGenerator |
IopenInfoModalWindow |
IcloseInfoModalWindow |
IingredientModalWindowOpened;

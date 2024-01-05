import { TIngredientObject } from "../../utils/constantsOfTS";

export const OPEN_INFO_MODAL_WINDOW: 'OPEN_INFO_MODAL_WINDOW' = 'OPEN_INFO_MODAL_WINDOW';

export const CLEAR_INITIAL_STATE_CURRENT_INGREDIENT_TO_MODAL: 'CLEAR_INITIAL_STATE_CURRENT_INGREDIENT_TO_MODAL' = 'CLEAR_INITIAL_STATE_CURRENT_INGREDIENT_TO_MODAL'

export const openInfoModalWindow = (ingredient: TIngredientObject) => {
    return {type: OPEN_INFO_MODAL_WINDOW, payload: ingredient}
}

interface IclearInitialState {
    readonly type: typeof CLEAR_INITIAL_STATE_CURRENT_INGREDIENT_TO_MODAL
}

interface IopenInfoModalWindow {
    readonly type: typeof OPEN_INFO_MODAL_WINDOW;
    payload: TIngredientObject
};


export type TCurrentIngredientToModalActions =
IopenInfoModalWindow |
IclearInitialState
import { string } from "prop-types";
import { COLLECT_ORDER, OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW, SEND_ORDER } from "../../actions/orderedIngredientsAction";
import { TOrderedIngredientActions } from "../../actions/orderedIngredientsAction";
import { TIngredientObject } from "../../../utils/constantsOfTS";

const initialState: TInitialState = {
    modalOpened: false,
    orderedIngredinets: [],
    order: 'number of order'
}


export const orderedIngredientsReducer = (state = initialState, action: TOrderedIngredientActions) => {
    switch (action.type) {
        case COLLECT_ORDER: {
            return {
                ...state,
                orderedIngredientsReducer: [action.payload]
            }
        }
        case OPEN_MODAL_WINDOW: {
            return {
                ...state,
                modalOpened: true
            }
        }
        case CLOSE_MODAL_WINDOW: {
            return {
                ...state,
                modalOpened: false,
            }
        }
        case SEND_ORDER :{
            return {
                ...state,
                order: action.payload
            }
        }
        default: return state
    }
}

type TInitialState = {
    modalOpened: boolean;
    orderedIngredinets: TIngredientObject[];
    order: any;
}
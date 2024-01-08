import { string } from "prop-types";
import { CLEAR_STATE_ORDERED_INGREDIENTS, SEND_ORDER } from "../../actions/orderedIngredientsAction";
import { TOrderedIngredientActions } from "../../actions/orderedIngredientsAction";
import { TIngredientObject } from "../../../utils/constantsOfTS";

export const initialState: TInitialState = {
    order: {}
}


export const orderedIngredientsReducer = (state = initialState, action: TOrderedIngredientActions) => {
    switch (action.type) {
        case SEND_ORDER :{
            return {
                order: action.payload
            }
        }
        case CLEAR_STATE_ORDERED_INGREDIENTS: {
            return initialState
        }
        default: return state
    }
}

type TInitialState = {
    order: any;
}
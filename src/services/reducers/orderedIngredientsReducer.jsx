import { string } from "prop-types";
import { COLLECT_ORDER, OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW, SEND_ORDER } from "../actions/orderedIngredientsAction";

const initialState = {
    modalOpened: false,
    orderedIngredinets: [],
    order: string
}


export const orderedIngredientsReducer = (state = initialState, action) => {
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
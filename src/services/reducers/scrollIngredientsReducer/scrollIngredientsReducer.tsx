import { current } from "@reduxjs/toolkit"
import { CLEAR_STATE_SCROLL_REDUCER, GET_CURRENT_TAB } from "../../actions/scrollIngredientsAction";
import { TScrollAction } from "../../actions/scrollIngredientsAction";

export const initialState: {currentTab: string} = {
    currentTab: 'one'
}

export const scrollReducer = (state = initialState, action: TScrollAction) => {
    switch(action.type) {
        case GET_CURRENT_TAB: {
            return {
                currentTab: action.payload
            }
        }
        case CLEAR_STATE_SCROLL_REDUCER: {
            return initialState
        }
        default: return state
    }
}

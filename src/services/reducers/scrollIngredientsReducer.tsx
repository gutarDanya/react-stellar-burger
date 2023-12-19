import { current } from "@reduxjs/toolkit"
import { GET_CURRENT_TAB } from "../actions/scrollIngredientsAction";
import { TScrollAction } from "../actions/scrollIngredientsAction";

const initialState: {currentTab: string} = {
    currentTab: 'one'
}

export const scrollReducer = (state = initialState, action: TScrollAction) => {
    switch(action.type) {
        case GET_CURRENT_TAB: {
            return {
                currentTab: action.payload
            }
        }
        default: return state
    }
}

import { current } from "@reduxjs/toolkit"
import { GET_CURRENT_TAB } from "../actions/scrollIngredientsAction"

const initialState = {
    currentTab: 'one'
}

export const scrollReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_TAB: {
            return {
                currentTab: action.payload
            }
        }
        default: return state
    }
}

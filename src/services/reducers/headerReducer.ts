import { ACTIVE_LINK_IS_CONSTRUCTOR, ACTIVE_LINK_IS_ORDERS, ACTIVE_LINK_IS_PROFILE, THeaderActions } from "../actions/headerAction";

type TInitialState = {
    constructor: boolean;
    orders: boolean;
    profile: boolean;
}


const initialState = {
    constructor: true,
    orders: false,
    profile: false
}

export const headerReducer = (state = initialState, action: THeaderActions) => {
    switch (action.type) {
        case ACTIVE_LINK_IS_CONSTRUCTOR: {
            return {
                constructor: true,
                orders: false,
                profile: false
            }
        }
        case ACTIVE_LINK_IS_ORDERS: {
            return {
                constructor: false,
                orders: true,
                profile: false
            }
        }
        case ACTIVE_LINK_IS_PROFILE: {
            return {
                constructor: false,
                orders: false,
                profile: true
            }
        }
        default: return state
    }
}
export const ACTIVE_LINK_IS_CONSTRUCTOR: 'ACTIVE_LINK_IS_CONSTRUCTOR' = 'ACTIVE_LINK_IS_CONSTRUCTOR';
export const ACTIVE_LINK_IS_ORDERS: 'ACTIVE_LINK_IS_ORDERS' = 'ACTIVE_LINK_IS_ORDERS';
export const ACTIVE_LINK_IS_PROFILE: 'ACTIVE_LINK_IS_PROFILE' = 'ACTIVE_LINK_IS_PROFILE';
export const CLEAR_STATE_HEADER_REDUCER: 'CLEAR_STATE_HEADER_REDUCER' = 'CLEAR_STATE_HEADER_REDUCER';

interface IClearState {
    readonly type: typeof CLEAR_STATE_HEADER_REDUCER
}

interface IActiveConstructor {
    readonly type: typeof ACTIVE_LINK_IS_CONSTRUCTOR
}

interface IActiveOrders {
    readonly type: typeof ACTIVE_LINK_IS_ORDERS
}

interface IActiveProfile {
    readonly type: typeof ACTIVE_LINK_IS_PROFILE
}

export type THeaderActions = 
IActiveConstructor |
IActiveOrders |
IActiveProfile |
IClearState
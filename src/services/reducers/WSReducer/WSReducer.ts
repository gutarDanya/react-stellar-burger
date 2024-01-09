import { CLEAR_STATE_WSREDUCER, GET_CURRENT_ORDER, TWSActions, WS_CLOSE, WS_CONNECT, WS_CONNECTING, WS_DISCONNECT, WS_ERROR, WS_MESSAGE, WS_OPEN } from "../../actions/WSAction"

export const initialState: TInitialState = {
    status: 'offline',
    connectingError: '',
    orders: [],
    total: 1488,
    totalToday: 322,
    currentOrder: {}
};

type TInitialState = {
    status: string;
    connectingError: string;
    orders: [];
    total: number;
    totalToday: number;
    currentOrder: any;
}

export const WSReducer = (state = initialState, action: TWSActions) => {
    switch (action.type) {
        case WS_CONNECTING:
            console.log(action.payload)
            return {
                ...state,
                status: 'connecting'
            }
        case WS_OPEN: {
            return {
                ...state,
                status: 'online'
            }
        }
        case WS_MESSAGE: {
            const { orders, total, totalToday } = action.payload
            console.log(action.payload)
            return {
                ...state,
                orders: orders,
                total: total,
                totalToday: totalToday
            }
        }
        case WS_ERROR: {
            console.log(action.payload)
            return {
                ...state,
                connectingError: action.payload
            }
        }
        case WS_CLOSE: {
            return {
                ...state,
                status: 'offline'
            }
        }
        case WS_DISCONNECT: {
            return {
                ...state,
                status: 'offline'
            }
        }
        case WS_CONNECT: {
            return {
                ...state,
                status: 'online'
            }
        }
        case GET_CURRENT_ORDER: {
            return {
                ...state,
                currentOrder: state.orders.find((order: any) => order._id === action.payload)
            }
        }
        case CLEAR_STATE_WSREDUCER: {
            return initialState
        }
        default: return state
    }
}
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

export const sendOrder = (ingredients) => {
    return function(dispatch) {

        fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'ingredients': ingredients.map(ingredients => ingredients._id)
            })
        })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: SEND_ORDER,
                payload: data
            })
        })
        .catch((err) => {
            console.log( err.status, err.text)
        })
    }
}
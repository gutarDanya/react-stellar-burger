import { baseUrl } from "../../utils/constants";
import { checkResponse } from "../../utils/constants";
export const COLLECT_ORDER = 'COLLECT_ORDER';
export const OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW';
export const CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW';
export const SEND_ORDER = 'SEND_ORDER';

export const collectOrderGenerator = (ingredients) => {
    return{type: COLLECT_ORDER, payload: ingredients}
}

export const closeOrderedModal = () => {
    return {type: CLOSE_MODAL_WINDOW}
}

export const sendOrder = (ingredients) => {
    return function(dispatch) {

        fetch(`${baseUrl}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'ingredients': ingredients.map(ingredients => ingredients._id)
            })
        })
        .then(checkResponse)
        .then((data) => {
            dispatch({
                type: SEND_ORDER,
                payload: data
            })
        })
        .catch((err) => {
            console.log(`Ошибка: ${err.status}`)
        })
    }
}
import { baseUrl } from "../../utils/constants";
import { checkResponse } from "../../utils/constants";
import { TIngredientObject } from "../../utils/constantsOfTS";
import { getCookie } from "../../utils/auth";
import { AppDispatch } from "../reducers/indexReducer";
import { refreshToken } from "./AuthAction";

export const SEND_ORDER = 'SEND_ORDER';
export const CLEAR_STATE_ORDERED_INGREDIENTS: 'CLEAR_STATE_ORDERED_INGREDIENTS' ='CLEAR_STATE_ORDERED_INGREDIENTS';

export const sendOrder = (ingredients: TIngredientObject[]) => {
    return function (dispatch: AppDispatch) {
        fetch(`${baseUrl}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: "Bearer " + getCookie("accessToken")
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
            console.log(data)
        })
        .catch((err) => {
            console.log(`Ошибка: ${err.status}`)
        })
    }
}


interface ISend {
    readonly type: typeof SEND_ORDER;
    payload: any;
};

interface IClearState {
    readonly type: typeof CLEAR_STATE_ORDERED_INGREDIENTS
}


export type TOrderedIngredientActions = ISend |
IClearState
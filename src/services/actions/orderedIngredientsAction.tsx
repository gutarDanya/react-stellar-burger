import { baseUrl } from "../../utils/constants";
import { checkResponse } from "../../utils/constants";
import { TIngredientObject } from "../../utils/constantsOfTS";
import { getCookie } from "../../utils/auth";

export const COLLECT_ORDER = 'COLLECT_ORDER';
export const OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW';
export const CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW';
export const SEND_ORDER = 'SEND_ORDER';

export const collectOrderGenerator = (ingredients: TIngredientObject[]) => {
    return{type: COLLECT_ORDER, payload: ingredients}
}

export const closeOrderedModal = () => {
    return {type: CLOSE_MODAL_WINDOW}
}

export const sendOrder = (ingredients: TIngredientObject[]) => {
    return function(dispatch: any) {
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

interface ICollectOreder {
    readonly type: typeof COLLECT_ORDER;
    payload: TIngredientObject[];
};

interface IOpenModal {
    readonly type: typeof OPEN_MODAL_WINDOW;
};

interface ICloseModal {
    readonly type: typeof CLOSE_MODAL_WINDOW;
};

interface ISend {
    readonly type: typeof SEND_ORDER;
    payload: TIngredientObject[];
};

export type TOrderedIngredientActions = ICollectOreder |
IOpenModal |
ICloseModal |
ISend;
import { baseUrl } from "../../utils/constants";
import { checkResponse } from "../../utils/constants";
import { TIngredientObject } from "../../utils/constantsOfTS";

export const LOAD_START_INGREDIENTS_DATA: 'LOAD_START_INGREDIENTS_DATA' ='LOAD_START_INGREDIENTS_DATA';
export const LOAD_START_INGREDIENTS_DATA_REQUEST: 'LOAD_START_INGREDIENTS_DATA_REQUEST' = 'LOAD_START_INGREDIENTS_DATA_REQUEST';
export const LOAD_START_INGREDIENTS_DATA_SUCCES: 'LOAD_START_INGREDIENTS_DATA_SUCCES' = 'LOAD_START_INGREDIENTS_DATA_SUCCES';
export const LOAD_START_INGREDIENTS_DATA_FAILED: 'LOAD_START_INGREDIENTS_DATA_FAILED' = 'LOAD_START_INGREDIENTS_DATA_FAILED';
export const ADD_NUMBER_TO_COUNT: 'ADD_NUMBER_TO_COUNT' = 'ADD_NUMBER_TO_COUNT';
export const REMOVE_NUMBER_FROM_COUNT: 'REMOVE_NUMBER_FROM_COUNT' = 'REMOVE_NUMBER_FROM_COUNT';
export const GET_CURRENT_INGREDIENT_TO_ROUTING_INGREDIENT: 'GET_CURRENT_INGREDIENT_TO_ROUTING_INGREDIENT' = 'GET_CURRENT_INGREDIENT_TO_ROUTING_INGREDIENT';

export const addCount = (ingredient: TIngredientObject) => {
    return ({type: ADD_NUMBER_TO_COUNT, payload: ingredient})
}

export const removeCount = (ingredient: TIngredientObject) => {
    return ({type: REMOVE_NUMBER_FROM_COUNT, payload: ingredient})
}

export const getCurrentIngredientToRouting = (id: string | number) => {
    return ({type: GET_CURRENT_INGREDIENT_TO_ROUTING_INGREDIENT, payload: id})
}

export const getData = () => {
    return async function(dispatch: any) {
        dispatch({
            type: LOAD_START_INGREDIENTS_DATA_REQUEST
        })
         await fetch(`${baseUrl}/ingredients`)
        .then(checkResponse)
        .then(res => {
                dispatch({
                    type: LOAD_START_INGREDIENTS_DATA_SUCCES,
                    payload: res.data
                })

        })
        .catch((err) => [
            console.log(`ошибка: ${err.status}`)
        ])
    }
}

interface IloadStartIngredientsData {
    readonly type: typeof LOAD_START_INGREDIENTS_DATA;
};

interface IloadStartIngredientsDataRequset {
    readonly type: typeof LOAD_START_INGREDIENTS_DATA_REQUEST;
};

interface IloadStartIngredientsDataSuccess {
    readonly type: typeof LOAD_START_INGREDIENTS_DATA_SUCCES;
    payload: Array<TIngredientObject>
};

interface IloadStartIngredientsDataFailed {
    readonly type: typeof LOAD_START_INGREDIENTS_DATA_FAILED;
};

interface IaddNumberToCount {
    readonly type: typeof ADD_NUMBER_TO_COUNT;
    readonly payload: TIngredientObject;
};

interface IremoverNumberFromCount {
    readonly type: typeof REMOVE_NUMBER_FROM_COUNT;
    payload: TIngredientObject
};

interface IgetCurrentIngredientToRouting {
    readonly type: typeof GET_CURRENT_INGREDIENT_TO_ROUTING_INGREDIENT;
    payload: string | number
};

export type TApiActions = IloadStartIngredientsData |
IloadStartIngredientsDataRequset |
IloadStartIngredientsDataSuccess |
IloadStartIngredientsDataFailed |
IaddNumberToCount |
IremoverNumberFromCount |
IgetCurrentIngredientToRouting;

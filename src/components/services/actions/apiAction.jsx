import { baseUrl } from "../../../utils/constants";

export const LOAD_START_INGREDIENTS_DATA ='LOAD_START_INGREDIENTS_DATA';
export const LOAD_START_INGREDIENTS_DATA_REQUEST = 'LOAD_START_INGREDIENTS_DATA_REQUEST';
export const LOAD_START_INGREDIENTS_DATA_SUCCES = 'LOAD_START_INGREDIENTS_DATA_SUCCES';
export const LOAD_START_INGREDIENTS_DATA_FAILED = 'LOAD_START_INGREDIENTS_DATA_FAILED';
export const ADD_NUMBER_TO_COUNT = 'ADD_NUMBER_TO_COUNT';
export const REMOVE_NUMBER_FROM_COUNT = 'REMOVE_NUMBER_FROM_COUNT';
export const UPDATE_COUNT_OF_BUN = 'UPDATE_COUNT_OF_BUN';

export const addCount = (ingredient) => {
    return ({type: ADD_NUMBER_TO_COUNT, payload: ingredient})
}

export const removeCount = (ingredient) => {
    return ({type: REMOVE_NUMBER_FROM_COUNT, payload: ingredient})
}

export const getData = () => {
    return function(dispatch) {
        dispatch({
            type: LOAD_START_INGREDIENTS_DATA_REQUEST
        })
        fetch(`${baseUrl}/ingredients`)
        .then(res => res.json())
        .then(res => {
                dispatch({
                    type: LOAD_START_INGREDIENTS_DATA_SUCCES,
                    payload: res.data
                })

        })
        .catch(err => {
            dispatch({
                type: LOAD_START_INGREDIENTS_DATA_FAILED
            })
        })
    }
}

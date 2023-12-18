import {
    LOAD_START_INGREDIENTS_DATA,
    LOAD_START_INGREDIENTS_DATA_REQUEST,
    LOAD_START_INGREDIENTS_DATA_SUCCES,
    LOAD_START_INGREDIENTS_DATA_FAILED,
    ADD_NUMBER_TO_COUNT,
    REMOVE_NUMBER_FROM_COUNT,
    GET_CURRENT_INGREDIENT_TO_ROUTING_INGREDIENT
} from '../actions/apiAction';
import { TIngredientObject } from '../../utils/constantsOfTS';
import { TApiActions } from '../actions/apiAction';


const initialState: IinitialState = {
    ingredientData: [],
    getIngredientsFailed: false,
    getIngredientsRequest: false,
    currentIngredient: undefined
}

export const apiReducer = (state = initialState, action: TApiActions) : IinitialState => {
    switch (action.type) {
        case LOAD_START_INGREDIENTS_DATA_REQUEST: {
            return {
                ...state,
                getIngredientsRequest: true,
                getIngredientsFailed: false
            }
        }
        case LOAD_START_INGREDIENTS_DATA_SUCCES: {
            return {
                ...state,
                getIngredientsRequest: false,
                getIngredientsFailed: false,
                ingredientData: action.payload
            }
        }
        case LOAD_START_INGREDIENTS_DATA_FAILED: {
            return {
                ...state,
                getIngredientsFailed: true,
                getIngredientsRequest: false
            }
        }
        case ADD_NUMBER_TO_COUNT: {
            return {
                ...state,
                ingredientData: state.ingredientData.map((ingredient) => action.payload.type === 'bun' && ingredient.type === 'bun'
                ? {...ingredient,
                __v: 0}
                : ingredient).map((ingredient) => ingredient._id === action.payload._id
                ? {...ingredient,
                     __v: ingredient.__v + 1}
                : ingredient)
            }
        }
        case REMOVE_NUMBER_FROM_COUNT: {
            return {
                ...state,
                ingredientData: state.ingredientData.map((ingredient) => ingredient._id === action.payload._id
                ? {...ingredient,
                __v: ingredient.__v - 1}
                :ingredient)
            }
        }
        case GET_CURRENT_INGREDIENT_TO_ROUTING_INGREDIENT: {
            return {
                ...state,
                currentIngredient: state.ingredientData.find((ingredient) => ingredient._id === action.payload)
            }
        }
        default: return state
    }
}

export interface IinitialState{
    ingredientData: Array<TIngredientObject>;
    getIngredientsFailed: boolean;
    getIngredientsRequest: boolean;
    currentIngredient: TIngredientObject | undefined
}
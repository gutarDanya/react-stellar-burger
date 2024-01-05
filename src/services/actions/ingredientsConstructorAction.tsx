import { v4 as uuid4 } from 'uuid'
import { TIngredientObject } from '../../utils/constantsOfTS';
export const GET_ALL_INGREDIENTS = 'GET_ALL_INGREDIENTS';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const ADD_BUN_TO_CONSTRUCTOR = 'ADD_BUN_TO_CONSTRUCTOR';
export const ADD_MAIN_TO_CONSTRUCTOR = 'ADD_MAIN_TO_CONSTRUCTOR';
export const SORTING_INGREDIENTS = 'SORTING_INGREDIENTS';
export const CLEAR_STATE_CONSTRUCTOR_REDUCER: 'CLEAR_STATE_CONSTRUCTOR_REDUCER' = 'CLEAR_STATE_CONSTRUCTOR_REDUCER';

export const addBun = (bun: TIngredientObject, id: string) => {
    return ({type: ADD_BUN_TO_CONSTRUCTOR, payload: {
        ...bun, 
        superId: id
    }})
}

export const addMainIngredient = (ingredient: TIngredientObject, id: string) => {

    return ({type: ADD_MAIN_TO_CONSTRUCTOR, payload: {
        ...ingredient,
        superId: id
    }})
}

export const removeIngredient = (ingredient: TIngredientObject) => {
    return ({type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, payload: ingredient})
}

export const sortingIngredientsGenerator = (draggedIngredient : number, targetIngredient: number ) => {
    return ({type: SORTING_INGREDIENTS, payload: {draggedIngredient, targetIngredient}})
}

interface IArguments {
    draggedIngredient: number;
    targetIngredient: number;
}

interface IAddBun {
    readonly type: typeof ADD_BUN_TO_CONSTRUCTOR;
    payload: TIngredientObject;
}

interface IAddMain {
    readonly type: typeof ADD_MAIN_TO_CONSTRUCTOR;
    payload: TIngredientObject;
}

interface IRemoveIngredient {
    readonly type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
    payload: TIngredientObject;
}

interface ISortingIngredients {
    readonly type: typeof SORTING_INGREDIENTS;
    payload: IArguments;
}

interface IClearState {
    readonly type: typeof CLEAR_STATE_CONSTRUCTOR_REDUCER
}

export type TIngredientConstructorActions = IAddBun |
IAddMain |
IRemoveIngredient |
ISortingIngredients |
IClearState;
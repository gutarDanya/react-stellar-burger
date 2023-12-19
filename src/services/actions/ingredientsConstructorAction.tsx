import { v4 as uuid4 } from 'uuid'
import { TIngredientObject } from '../../utils/constantsOfTS';
import { IBun, IMain } from '../../components/BurgerConstructor/InfoOfOrder/InfoOfOrder';
export const GET_ALL_INGREDIENTS = 'GET_ALL_INGREDIENTS';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const ADD_BUN_TO_CONSTRUCTOR = 'ADD_BUN_TO_CONSTRUCTOR';
export const ADD_MAIN_TO_CONSTRUCTOR = 'ADD_MAIN_TO_CONSTRUCTOR';
export const SORTING_INGREDIENTS = 'SORTING_INGREDIENTS';

export const addBun = (bun: IBun) => {
    return ({type: ADD_BUN_TO_CONSTRUCTOR, payload: {
        ...bun, 
        superId: uuid4()
    }})
}

export const addMainIngredient = (ingredient: IMain) => {

    return ({type: ADD_MAIN_TO_CONSTRUCTOR, payload: {
        ...ingredient,
        superId: uuid4()
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

export type TIngredientConstructorActions = IAddBun |
IAddMain |
IRemoveIngredient |
ISortingIngredients;
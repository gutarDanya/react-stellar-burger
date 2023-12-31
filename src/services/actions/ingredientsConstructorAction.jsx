import { v4 as uuid4 } from 'uuid';
export const GET_ALL_INGREDIENTS = 'GET_ALL_INGREDIENTS';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const ADD_BUN_TO_CONSTRUCTOR = 'ADD_BUN_TO_CONSTRUCTOR';
export const ADD_MAIN_TO_CONSTRUCTOR = 'ADD_MAIN_TO_CONSTRUCTOR';
export const SORTING_INGREDIENTS = 'SORTING_INGREDIENTS';

export const addBun = (bun) => {
    return ({type: ADD_BUN_TO_CONSTRUCTOR, payload: {
        ...bun, 
        superId: uuid4()
    }})
}

export const addMainIngredient = (ingredient) => {

    return ({type: ADD_MAIN_TO_CONSTRUCTOR, payload: {
        ...ingredient,
        superId: uuid4()
    }})
}

export const removeIngredient = (ingredient) => {
    return ({type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, payload: ingredient})
}

export const sortingIngredientsGenerator = (draggedIngredient, targetIngredient ) => {
    return ({type: SORTING_INGREDIENTS, payload: {draggedIngredient, targetIngredient}})
}
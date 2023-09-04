import { v4 as uuid4 } from 'uuid';
export const GET_ALL_INGREDIENTS = 'GET_ALL_INGREDIENTS';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const ADD_BUN_TO_CONSTRUCTOR = 'ADD_BUN_TO_CONSTRUCTOR';
export const ADD_MAIN_TO_CONSTRUCTOR = 'ADD_MAIN_TO_CONSTRUCTOR';
export const SORTING_INGREDIENTS = 'SORTING_INGREDIENTS';

export const addBun = (bun) => {
    const item = {
        ...bun,
        ...bun.ingredient,
        uniqueId: uuid4() 
    }
    return ({type: ADD_BUN_TO_CONSTRUCTOR, payload: item })
}

export const addMainIngredient = (ingredient) => {
    const item = {
        ...ingredient,

        uniqueId: uuid4()
    }
    return ({type: ADD_MAIN_TO_CONSTRUCTOR, payload: ingredient})
}

export const removeIngredient = (ingredient) => {
    return ({type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, payload: ingredient})
}

export const getAllIngredients = (ingredient) => {
    return ({type: GET_ALL_INGREDIENTS, payload: ingredient})
}

export const sortingIngredientsGenerator = (draggedIngredient, targetIngredient ) => {
    return ({type: SORTING_INGREDIENTS, payload: {draggedIngredient, targetIngredient}})
}
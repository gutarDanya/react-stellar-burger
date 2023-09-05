import {
    ADD_BUN_TO_CONSTRUCTOR,
    ADD_MAIN_TO_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    GET_ALL_INGREDIENTS,
    SORTING_INGREDIENTS
} from '../actions/ingredientsConstructorAction';
import { data } from '../../utils/data';

const initialState = {
    allIngredients: [],
    bun: [],
    main: []
}

//Увеличь занчение коунт при перетаскивании ингредиента

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUN_TO_CONSTRUCTOR : {
            return {
                ...state,
                bun: action.payload
            }
        }
        case ADD_MAIN_TO_CONSTRUCTOR: {
            return {
                ...state,
                main: [...state.main, action.payload]
            }
        }
        case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
            return {
                ...state,
                main: state.main.filter((ingredient) => ingredient.superId !== action.payload.superId)
            }
        }
        case GET_ALL_INGREDIENTS: {
            return {
                ...state,
                allIngredients: [...state.allIngredients, action.payload]
            }
        }
        case SORTING_INGREDIENTS: { 
           const {draggedIngredient, targetIngredient} = action.payload

           let result = [];

            if (draggedIngredient === targetIngredient) {
                return
            } else if (draggedIngredient > targetIngredient) {
                result = [
                ...state.main.slice(0, targetIngredient),
                state.main[draggedIngredient],
                state.main[targetIngredient],
                ...state.main.slice(draggedIngredient + 1)
                ]
            } else {
                result = [
                    ...state.main.slice(0, draggedIngredient),
                    state.main[targetIngredient],
                    state.main[draggedIngredient],
                    ...state.main.slice(targetIngredient + 1)
                ]
            }

            return {
                ...state,
                main: result
            }
        }
        default: return state
    }
}
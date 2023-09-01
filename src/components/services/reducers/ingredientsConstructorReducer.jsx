import {
    ADD_BUN_TO_CONSTRUCTOR,
    ADD_MAIN_TO_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    GET_ALL_INGREDIENTS,
    SORTING_INGREDIENTS
} from '../actions/ingredientsConstructorAction';
import { data } from '../../../utils/data';

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
            const ingredient = action.payload;
            ingredient.id = Math.random();
            return {
                ...state,
                main: [...state.main, ingredient]
            }
        }
        case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
            return {
                ...state,
                main: state.main.filter((ingredient) => ingredient.id !== action.payload.id)
            }
        }
        case GET_ALL_INGREDIENTS: {
            return {
                ...state,
                allIngredients: [...state.allIngredients, action.payload]
            }
        }
        case SORTING_INGREDIENTS: { 
            // console.log(action.payload)
           const {draggedIngredient, targetIngredient} = action.payload;
           let draggedIngredientIndex = state.main.findIndex((ingredient) => ingredient._id === draggedIngredient._id);
           const targetIngredientIndex = state.main.findIndex((ingredient) => ingredient._id === targetIngredient._id);
           const sortedIngredients = [...state.main]
           sortedIngredients.splice(draggedIngredientIndex, 1);

           draggedIngredientIndex = targetIngredientIndex + 1;

           const startOfArray = sortedIngredients.slice(0, draggedIngredientIndex);
           const endOfArray = sortedIngredients.slice(draggedIngredientIndex, sortedIngredients.length);

           const result = [...startOfArray, draggedIngredient, ...endOfArray]
            return {
                ...state,
                main: result
            }
        }
        default: return state
    }
}
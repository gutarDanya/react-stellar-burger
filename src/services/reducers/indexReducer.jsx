import { apiReducer } from "./apiReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { currentIngredientReducer } from "./currentIngredientsToModalReducer";
import { constructorReducer } from "./ingredientsConstructorReducer";
import { orderedIngredientsReducer } from './orderedIngredientsReducer';
import { scrollReducer } from "./scrollIngredientsReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { registrationReducer } from "./RegistrationReducer";
import { authorizationReducer } from "./AuthorizationReducer";


export const rootReducer = combineReducers({
    registrationReducer,
    authorizationReducer,
    forgotPasswordReducer,
    apiReducer,
    currentIngredientReducer,
    constructorReducer,
    orderedIngredientsReducer,
    scrollReducer
})
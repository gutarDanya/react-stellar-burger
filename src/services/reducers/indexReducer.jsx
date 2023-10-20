import { apiReducer } from "./apiReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { currentIngredientReducer } from "./currentIngredientsToModalReducer";
import { constructorReducer } from "./ingredientsConstructorReducer";
import { orderedIngredientsReducer } from './orderedIngredientsReducer';
import { scrollReducer } from "./scrollIngredientsReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { registrationReducer } from "./registrationReducer";
import { userInfoReduecer } from "./userInfoReducer";
import { loginReducer } from "./LoginReduecer";


export const rootReducer = combineReducers({
    loginReducer,
    userInfoReduecer,
    registrationReducer,
    forgotPasswordReducer,
    apiReducer,
    currentIngredientReducer,
    constructorReducer,
    orderedIngredientsReducer,
    scrollReducer
})
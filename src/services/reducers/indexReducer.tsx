import { apiReducer } from "./apiReducer";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { currentIngredientReducer } from "./currentIngredientsToModalReducer";
import { constructorReducer } from "./ingredientsConstructorReducer";
import { orderedIngredientsReducer } from './orderedIngredientsReducer';
import { scrollReducer } from "./scrollIngredientsReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { registrationReducer } from "./registrationReducer";
import { userInfoReduecer } from "./userInfoReducer";
import { loginReducer } from "./LoginReduecer";
import { inputReducer } from "./inputReduecer";
import { applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
    inputReducer,
    loginReducer,
    userInfoReduecer,
    registrationReducer,
    forgotPasswordReducer,
    apiReducer,
    currentIngredientReducer,
    constructorReducer,
    orderedIngredientsReducer,
    scrollReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk
    )
)

export const store = createStore(rootReducer, enhancer)
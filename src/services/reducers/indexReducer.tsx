import { apiReducer } from "./apiReducer";
import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { currentIngredientReducer } from "./currentIngredientsToModalReducer";
import { constructorReducer } from "./ingredientsConstructorReducer";
import { orderedIngredientsReducer } from './orderedIngredientsReducer';
import { scrollReducer } from "./scrollIngredientsReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";
import { registrationReducer } from "./registrationReducer";
import { userInfoReduecer } from "./userInfoReducer";
import { loginReducer } from "./LoginReduecer";
import { inputReducer } from "./inputReduecer";
import { WSReducer } from "./WSReducer";
import { applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { WSActions } from "../actions/WSAction";
import { socketMiddleware } from "../middlewares/WSMiddleWare";
import { WSHistroyReducer } from '../reducers/TWSHistoryReducer'
import { WSHistoryActions } from "../actions/WSHistoryAction";


export const rootReducer = combineReducers({
    WSReducer,
    inputReducer,
    loginReducer,
    userInfoReduecer,
    registrationReducer,
    forgotPasswordReducer,
    apiReducer,
    currentIngredientReducer,
    constructorReducer,
    orderedIngredientsReducer,
    scrollReducer,
    WSHistroyReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk, socketMiddleware(WSActions), socketMiddleware(WSHistoryActions)
    )
)

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']

export const store = createStore(rootReducer, enhancer)
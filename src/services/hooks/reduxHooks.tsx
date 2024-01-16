import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../reducers/indexReducer";
import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AuthActions } from "../actions/AuthAction";
import { THeaderActions } from "../actions/headerAction";
import { TApiActions } from "../actions/apiAction";
import { TCurrentIngredientToModalActions } from "../actions/currentIngredientsToModalAction";
import { TforgotPasswordActions } from "../actions/forgotPasswordAction";
import { TIngredientConstructorActions } from "../actions/ingredientsConstructorAction";
import { TInputsActions } from "../actions/inputAction";
import { TUnionWsActions } from "../actions/MiddlewareAction";
import { TOrderedIngredientActions } from "../actions/orderedIngredientsAction";
import { TScrollAction } from "../actions/scrollIngredientsAction";
import { TWSActions } from "../actions/WSAction";
import { TWSHistoryActions } from "../actions/WSHistoryAction";

export const useAppDispatch: () => AppDispatch | Thunk = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type Thunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootState, TApiActions |
    AuthActions |
     TCurrentIngredientToModalActions |
     TforgotPasswordActions | 
     THeaderActions |
     TIngredientConstructorActions |
     TInputsActions |
     TUnionWsActions | 
     TforgotPasswordActions |
     TOrderedIngredientActions |
     TScrollAction |
     TWSActions |
     TWSHistoryActions>
>;
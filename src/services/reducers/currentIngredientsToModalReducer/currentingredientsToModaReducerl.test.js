import { data } from "../../../utils/data";
import { CLEAR_INITIAL_STATE_CURRENT_INGREDIENT_TO_MODAL, OPEN_INFO_MODAL_WINDOW } from "../../actions/currentIngredientsToModalAction";
import { initialState } from "./currentIngredientsToModalReducer";
import { currentIngredientReducer } from "./currentIngredientsToModalReducer";

describe('тесты currentIngredientReducer', () => {

    afterEach(() => {
        currentIngredientReducer(null, {type: CLEAR_INITIAL_STATE_CURRENT_INGREDIENT_TO_MODAL})
    })

    it('тестирование изначального состояния редьюсера', () => {
        expect(currentIngredientReducer(undefined, {})).toEqual({
            currentIngredient: {},
            modalWindowOpened: false,
            opened: false
        })
    })

    it('тестирование изменения статуса открытия модального окна', () => {
        expect(currentIngredientReducer(initialState, {type: OPEN_INFO_MODAL_WINDOW, payload: data[0]})).toEqual({
            ...initialState,
            modalWindowOpened: true,
            currentIngredient: data[0]
        })
    })
})
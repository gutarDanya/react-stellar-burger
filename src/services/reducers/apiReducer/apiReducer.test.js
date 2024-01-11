import { apiReducer, initialState } from "./apiReducer"
import { data } from "../../../utils/data"
import { useAppDispatch } from "../../hooks/reduxHooks"
import {
    ADD_NUMBER_TO_COUNT,
    CLEAR_STATE_API_REDUCER,
    GET_CURRENT_INGREDIENT_TO_ROUTING_INGREDIENT,
    LOAD_START_INGREDIENTS_DATA_SUCCES,
    REMOVE_NUMBER_FROM_COUNT, addCount
} from "../../actions/apiAction"

const someBun = [
    data[0]
]

const someBunIn = [
    {...data[0], __v: 1}
]

const someMain = [
    data[1]
]

const someMainIn = [
    {...data[1], __v: 1}
]

const someArray = [
    data[0],
    data[1]
]

describe('тестирование apiReducer', () => {

    it('тестирование исходного состояния apiReducer',
        () => {
            expect(apiReducer(undefined, {})).toBe(initialState)
        })

    it('тестирование получения стартовых ингредиентов', () => {
        expect(apiReducer(undefined, { type: LOAD_START_INGREDIENTS_DATA_SUCCES, payload: [someBun] })).toEqual({
            ingredientData: [someBun],
            getIngredientsFailed: false,
            getIngredientsRequest: false,
            currentIngredient: undefined
        })
    })

    it('тестирование добавления счётчика к булке', () => {
        expect(apiReducer({ ...initialState, ingredientData: someBun }, { type: ADD_NUMBER_TO_COUNT, payload: someBun[0] })).toEqual({
            ...initialState,
            ingredientData: [
                someBunIn[0]
            ]
        })
    })

    it('тестирование добавления счётчика на основном ингредиенте', () => {
        expect(apiReducer({ ...initialState, ingredientData: someMain }, { type: ADD_NUMBER_TO_COUNT, payload: someMain[0] })).toEqual({
            ...initialState,
            ingredientData: [
                someMainIn[0]
            ]
        })
    })

    it('проверка работоспособности счётчика при удалении ингредиента из заказа', () => {
        expect(apiReducer({ ...initialState, ingredientData: someBunIn }, { type: REMOVE_NUMBER_FROM_COUNT, payload: someBunIn[0] })).toEqual({
            ...initialState,
            ingredientData: [
                someBun[0]
            ]
        })
    })

    it('получение нужного ингредиента для модального окна', () => {
        expect(apiReducer({ ...initialState, ingredientData: someArray}, { type: GET_CURRENT_INGREDIENT_TO_ROUTING_INGREDIENT, payload: someMain[0]._id })).toEqual({
            ...initialState,
            ingredientData: someArray,
            currentIngredient: someMain[0]
        })
    })

    afterEach(() => {
        apiReducer(undefined, { type: CLEAR_STATE_API_REDUCER })
    })
}
)
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
    {
        "_id": "60666c42cc7b410027a1a9b1",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
    }
]

const someBunIn = [
    {
        "_id": "60666c42cc7b410027a1a9b1",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 1
    }
]

const someMain = [
    {
        "_id": "60666c42cc7b410027a1a9b5",
        "name": "Говяжий метеорит (отбивная)",
        "type": "main",
        "proteins": 800,
        "fat": 800,
        "carbohydrates": 300,
        "calories": 2674,
        "price": 3000,
        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
        "__v": 0
    }
]

const someMainIn = [
    {
        "_id": "60666c42cc7b410027a1a9b5",
        "name": "Говяжий метеорит (отбивная)",
        "type": "main",
        "proteins": 800,
        "fat": 800,
        "carbohydrates": 300,
        "calories": 2674,
        "price": 3000,
        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
        "__v": 0
    }
]

const someArray = [
    {
        "_id": "60666c42cc7b410027a1a9b1",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
    },
    {
        "_id": "60666c42cc7b410027a1a9b5",
        "name": "Говяжий метеорит (отбивная)",
        "type": "main",
        "proteins": 800,
        "fat": 800,
        "carbohydrates": 300,
        "calories": 2674,
        "price": 3000,
        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
        "__v": 0
    }
]

describe('тестирование apiReducer', () => {

    it('тестирование исходного состояния apiReducer',
        () => {
            expect(apiReducer(undefined, {})).toEqual({
                ingredientData: [],
                getIngredientsFailed: false,
                getIngredientsRequest: false,
                currentIngredient: undefined
            })
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
                {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 1
                }
            ]
        })
    })

    it('тестирование добавления счётчика на основном ингредиенте', () => {
        expect(apiReducer({ ...initialState, ingredientData: someMain }, { type: ADD_NUMBER_TO_COUNT, payload: someMain[0] })).toEqual({
            ...initialState,
            ingredientData: [
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 1
                }
            ]
        })
    })

    it('проверка работоспособности счётчика при удалении ингредиента из заказа', () => {
        expect(apiReducer({ ...initialState, ingredientData: someBunIn }, { type: REMOVE_NUMBER_FROM_COUNT, payload: someBunIn[0] })).toEqual({
            ...initialState,
            ingredientData: [
                {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                }
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
import { CLEAR_STATE_CONSTRUCTOR_REDUCER, REMOVE_INGREDIENT_FROM_CONSTRUCTOR, SORTING_INGREDIENTS, addBun, addMainIngredient, sortingIngredientsGenerator } from "../../actions/ingredientsConstructorAction";
import { initialState } from "./ingredientsConstructorReducer";
import { data } from "../../../utils/data";
import { constructorReducer } from "./ingredientsConstructorReducer";

describe('тестирование самого сложного редьюсера', () => {

    it('тестирование изначального состояния', () => {
        expect(constructorReducer(undefined, {})).toEqual({
            allIngredients: [],
            bun: {},
            main: []
        })
    })

    it('тестирование добавления булочки в конструктор', () => {
        expect(constructorReducer(initialState, addBun(data[0], '1234'))).toEqual({
            ...initialState,
            bun: { ...data[0], superId: '1234' }
        })
    })

    it('тестирование добавления основных ингредиентов в конструктор', () => {
        expect(constructorReducer({ ...initialState, main: [{ ...data[3], superId: '123123' }] }, addMainIngredient(data[4], '321321'))).toEqual({
            ...initialState,
            main: [
                { ...data[3], superId: '123123' },
                { ...data[4], superId: '321321' }
            ]
        })
    })

    it('тестирование удаления ингредиента из конструктора', () => {
        expect(constructorReducer({...initialState, bun: {...data[0], superId: '1231234'}, main: [{...data[3], superId: '1234'},{...data[4], superId: '1231234'}]}, 
        { type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR, payload: {...data[4], superId: '1231234'}})).toEqual({
            ...initialState, 
            bun: {...data[0], superId: '1231234'},
            main: [{...data[3], superId: '1234'}]
        })
    })

    it('тестирование перемещения ингредиента в конструкторе', () => {
        expect(constructorReducer({...initialState, main:[data[1], data[2], data[3]]}, sortingIngredientsGenerator(1, 2))).toEqual({
            ...initialState,
            main: [data[1], data[3], data[2]]
        })
    })

    afterEach(() => {
        constructorReducer(undefined, { type: CLEAR_STATE_CONSTRUCTOR_REDUCER })
    })
})
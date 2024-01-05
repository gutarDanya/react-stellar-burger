import { CLEAR_STATE_CONSTRUCTOR_REDUCER } from "../../actions/ingredientsConstructorAction";
import { initialState } from "./ingredientsConstructorReducer";
import { constructorReducer } from "./ingredientsConstructorReducer";

describe('тестирование самого сложного редьюсера', () => {

    it('тестирование изначального состояния', () => {
        expect(constructorReducer(undefined, {})).toEqual({
            allIngredients: [],
            bun: {},
            main: []
        })
    })

    afterEach(() => {
        constructorReducer(undefined, { type: CLEAR_STATE_CONSTRUCTOR_REDUCER })
    })
})
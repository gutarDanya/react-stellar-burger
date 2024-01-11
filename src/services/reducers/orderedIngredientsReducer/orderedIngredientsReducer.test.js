import { data } from "../../../utils/data";
import { CLEAR_STATE_ORDERED_INGREDIETN_REDUCER, SEND_ORDER } from "../../actions/orderedIngredientsAction";
import { initialState, orderedIngredientsReducer } from "./orderedIngredientsReducer";

describe('тетстирование orderedIngredientsReducer', () => {

    it('тестирование изначального состояния редбюсера', () => {
        expect(orderedIngredientsReducer(undefined, {})).toBe(initialState)
    })

    it('тестирование отправления заказа', () => {
        expect(orderedIngredientsReducer(undefined, {type: SEND_ORDER, payload: { some: 'some', number: 1488}})).toEqual({
            order: {
                some: 'some',
                number: 1488
            }
        })
    })

    afterEach(() => {
        orderedIngredientsReducer(initialState, { type: CLEAR_STATE_ORDERED_INGREDIETN_REDUCER })
    })

})
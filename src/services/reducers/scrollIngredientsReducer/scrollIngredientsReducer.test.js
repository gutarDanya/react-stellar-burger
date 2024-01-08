import { CLEAR_STATE_SCROLL_REDUCER, getCurrentTab } from "../../actions/scrollIngredientsAction";
import { scrollReducer, initialState } from "./scrollIngredientsReducer";


describe('тестирование scrollReducer', () => {

    it('тестирование изначального состояния редьюсера', () => {
        expect(scrollReducer(undefined, {})).toEqual({
            currentTab: 'one'
        })
    })

    it('тестирование получения другой вкладки', () => {
        expect(scrollReducer(initialState, getCurrentTab('что-то'))).toEqual({
            currentTab: 'что-то'
        })
    })

    afterEach(() => {
        scrollReducer(initialState, { type: CLEAR_STATE_SCROLL_REDUCER})
    })
})
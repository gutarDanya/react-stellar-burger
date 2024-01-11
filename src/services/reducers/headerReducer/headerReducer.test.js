import { ACTIVE_LINK_IS_CONSTRUCTOR, ACTIVE_LINK_IS_ORDERS, ACTIVE_LINK_IS_PROFILE, CLEAR_STATE_HEADER_REDUCER } from "../../actions/headerAction";
import { headerReducer, initialState } from "./headerReducer";


describe('тестирование headerReducer', () => {

    it('тестирование изначального состояния', () => {
        expect(headerReducer(undefined, {})).toBe(initialState)
    })

    it('тестирование активации роута конструктора', () => {
        expect(headerReducer(initialState, {type: ACTIVE_LINK_IS_CONSTRUCTOR})).toEqual({
            ...initialState,
            constructor: true
        })
    })

    it('тестирование активации роута заказов', () => {
        expect(headerReducer(initialState, {type: ACTIVE_LINK_IS_ORDERS})).toEqual({
            ...initialState,
            orders: true,
            constructor: false
        })
    })

    it('тестирование активации роута профиля', () => {
        expect(headerReducer(initialState, {type: ACTIVE_LINK_IS_PROFILE})).toEqual({
            ...initialState,
            profile: true,
            constructor: false
        })
    })
    
    afterEach(() => { headerReducer(undefined, { type: CLEAR_STATE_HEADER_REDUCER }) })
})
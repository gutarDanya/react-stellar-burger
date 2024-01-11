import { CLEAR_STATE_REGISTRATION_REDUCER, REGISTARTION_ACTION } from "../../actions/AuthAction";
import { registrationReducer, initialState } from "./registrationReducer";

describe('тестирование registrationReducer', () => {

    it('тестирование изначального состояния registrationReducer', () => {
        expect(registrationReducer(undefined, {})).toBe(initialState)
    })

    it('тестирование получения ответа от сервера при регистарции', () => {
        expect(registrationReducer(initialState, {type: REGISTARTION_ACTION, payload: {somethink: 'asldjkalsj', message: 'vce chiki puki', success: true}})).toEqual({
            success: true
        })
    })
    afterEach(() => {
        registrationReducer(initialState, {type: CLEAR_STATE_REGISTRATION_REDUCER})
    })
})
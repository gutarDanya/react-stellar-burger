import { CLEAR_STATE_LOGIN_REDUCER, LOGIN_ACTION, LOGOUT_ACTION } from "../../actions/AuthAction";
import { initialState, loginReducer } from "./LoginReduecer";

describe('тестирование loginReducer', () => {

    it('тестирование изначального состояния редьюсера', () => {
        expect(loginReducer(undefined, {})).toEqual({
            login: true,
            logout: false
        })
    })

    it('тестирование login', () => {
        expect(loginReducer(initialState, {type: LOGIN_ACTION})).toEqual({
            login: true,
            logout: false
        })
    })

    it('тестирование logout', () => {
        expect(loginReducer(initialState, {type: LOGOUT_ACTION})).toEqual({
            logout: true,
            login: false
        })
    })

    afterEach(() => {
        loginReducer(initialState, {type: CLEAR_STATE_LOGIN_REDUCER})
    })
})
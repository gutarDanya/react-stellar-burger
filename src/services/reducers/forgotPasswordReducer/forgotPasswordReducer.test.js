import { data } from "../../../utils/data";
import { CHANGE_VALUE_OF_FORGOT, CLEAR_STATE_FORGOT_PASSWORD_REDUCER, GET_REQUEST_OF_FORGOT_PASSWORD } from "../../actions/forgotPasswordAction";
import { initialState, forgotPasswordReducer } from "./forgotPasswordReducer";

describe('тестирование forgotPasswordReducer', () => {

    it('тестирование исходного состояния', () => {
        expect(forgotPasswordReducer(undefined, {})).toBe(initialState)
    })

    it('тестирование получения успешного статуса отправления запроса', () => {
        expect(forgotPasswordReducer(undefined, {
            type: GET_REQUEST_OF_FORGOT_PASSWORD, payload: {
                data: 'somedata...',
                chtoTO: [],
                success: true,
            }
        })).toEqual({
            ...initialState,
            success: true
        })
    })

    it('тестирование получения неудачного статуса отправления запроса', () => {
        expect(forgotPasswordReducer(undefined, {
            type: GET_REQUEST_OF_FORGOT_PASSWORD, payload: {
                somethink: 'asjdlasjdal',
                date: 'сегодня в 4',
                success: 'error 404'
            }
        })).toEqual({
            ...initialState,
            success: 'error 404'
        })
    })

    it('тестирование измениния значения инпута', () => {
        expect(forgotPasswordReducer(undefined, {
            type: CHANGE_VALUE_OF_FORGOT, payload: 'minecraftPower@pivo.ru'
        })).toEqual({
            ...initialState,
            currentValue: 'minecraftPower@pivo.ru'
        })
    })

    afterEach(() => {
        forgotPasswordReducer(undefined, { type: CLEAR_STATE_FORGOT_PASSWORD_REDUCER })
    })
})
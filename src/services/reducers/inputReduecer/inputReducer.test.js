import { CLEAR_STATE_INPUT_REDUCER, setEmailValue, setNameValue, setPasswordValue, setResetMessage } from "../../actions/inputAction";
import {initialState, inputReducer } from "./inputReduecer";

describe('тестирование inputReducer', () => {
    it('Тестирование изначального состояния', () => {
        expect(inputReducer(undefined, {})).toEqual({
            emailValue: '',
            nameValue: '',
            passwordValue: '',
            resetMessage: ''
        })
    })

    it('тестирование изменения инпута email', () => {
        expect(inputReducer(initialState, setEmailValue('somethink'))).toEqual({
            ...initialState,
            emailValue: 'somethink'
        })
    })

    it('тестирование изменения инпута name', () => {
        expect(inputReducer(initialState, setNameValue('Даниил'))).toEqual({
            ...initialState,
            nameValue: 'Даниил'
        })
    })
    
    it('тестирование изменения инпута пароля', () => {
        expect(inputReducer(initialState, setPasswordValue('1234qwer'))).toEqual({
            ...initialState,
            passwordValue: '1234qwer'
        })
    })

    it('тестирование изменения инпута reset', () => {
        expect(inputReducer(initialState, setResetMessage('что-то'))).toEqual({
            ...initialState,
            resetMessage: 'что-то'
        })
    })

    afterEach(() => {
        inputReducer(initialState, {type: CLEAR_STATE_INPUT_REDUCER})
    })
})
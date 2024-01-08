import { data } from "../../../utils/data";
import { CLEAR_STATE_WSREDUCER, GET_CURRENT_ORDER, WS_CLOSE, WS_CONNECT, WS_CONNECTING, WS_DISCONNECT, WS_ERROR, WS_MESSAGE, WS_OPEN } from "../../actions/WSAction";
import { initialState, WSReducer as reducer } from "./WSReducer";


const someBun = data[0];
const someMain = data[1];
const someMainOther = data[2];
const someArray = [someBun, someMain, someMainOther]
const someArrayOther = [someBun, someMainOther, someMain]

describe('тестирование WSReducer', () => {

    it('тестирование изначального состояния редьюсера', () => {
        expect(reducer(initialState, { type: CLEAR_STATE_WSREDUCER })).toBe(initialState)
    })

    it('тестирование запуска подлючения к вебсокету', () => {
        expect(reducer(initialState, { type: WS_CONNECTING, payload: 'some-url' })).toEqual({
            ...initialState, status: 'connecting'
        })
    })

    it('тестирование редьюсера открытия соединения', () => {
        expect(reducer(initialState, { type: WS_OPEN })).toEqual({
            ...initialState, status: 'online'
        })
    })

    it('тестирование получения данных с вебоскета', () => {
        expect(reducer(initialState, { type: WS_MESSAGE, payload: { total: 2500, orders: someArray, totalToday: 112 } })).toEqual({
            ...initialState,
            orders: someArray,
            total: 2500,
            totalToday: 112
        })
    })

    it('тестирование редьюсера ошибки', () => {
        expect(reducer(initialState, { type: WS_ERROR, payload: 'server-error' })).toEqual({
            ...initialState,
            connectingError: 'server-error'
        })
    })

    it('тестирование редьюсера закрытия соединения', () => {
        expect(reducer(initialState, { type: WS_CLOSE })).toEqual({
            ...initialState,
            status: 'offline'
        })
    })

    it('тестирование редьюсера отключения от интернета', () => {
        expect(reducer(initialState, { type: WS_DISCONNECT })).toEqual({
            ...initialState,
            status: 'offline'
        })
    })

    it('тестирование рельюсера подключения к вебсокету', () => {
        expect(reducer(initialState, { type: WS_CONNECT })).toEqual({
            ...initialState,
            status: 'online'
        })
    })

    it('тестирование получения редьюсера для получения нужного ингредиента', () => {
        expect(reducer({ ...initialState, orders: [{ _id: 123123, ingredients: someArray }, { _id: 321321, ingredients: someArrayOther }] }, { type: GET_CURRENT_ORDER, payload: 321321 })).toEqual({
            ...initialState,
            orders: [
                { _id: 123123, ingredients: someArray },
                { _id: 321321, ingredients: someArrayOther }
            ],
            currentOrder: { _id: 321321, ingredients: someArrayOther }
        })
    })
}) 
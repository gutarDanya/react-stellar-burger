import { CLEAR_STATE_WSHISTORY_REDUCER, WS_CLOSE, WS_CONNECT, WS_CONNECTING, WS_DISCONNECT, WS_ERROR, WS_MESSAGE, WS_OPEN } from "../../actions/WSHistoryAction";
import { WSHistroyReducer as reducer, initialState } from "./TWSHistoryReducer";
import { data } from "../../../utils/data";


const someBun = data[0];
const someMain= data[1];
const someMainOther = data[2];
const someArray = [someBun, someMain, someMainOther]

describe('тестирование редьюсеров вебсокета для профиля', () => {

    it('тестирование изначального состояния', () => {
        expect(reducer(undefined, {})).toEqual({
            status: 'offline',
            connectingError: '',
            orders: [],
            total: 1488,
            totalToday: 322
        })
    })

    it('тестирование запуска подлючения к вебсокету', () => {
        expect(reducer(initialState, {type: WS_CONNECTING, payload: 'some-url'})).toEqual({
            ...initialState, status: 'connecting'
        })
    })

    it('тестирование редьюсера открытия соединения', () => {
        expect(reducer(initialState, {type: WS_OPEN})).toEqual({
            ...initialState, status: 'online'
        })
    })

    it('тестирование получения данных с вебоскета', () => {
        expect(reducer(initialState, {type: WS_MESSAGE, payload: {total: 2500, orders: someArray, totalToday: 112}})).toEqual({
            ...initialState, 
            orders: someArray,
            total: 2500,
            totalToday: 112
        })
    })

    it('тестирование редьюсера ошибки', () => {
        expect(reducer(initialState, {type: WS_ERROR, payload: 'server-error'})).toEqual({
            ...initialState,
            connectingError: 'server-error'
        })
    })

    it('тестирование редьюсера закрытия соединения', () => {
        expect(reducer(initialState, {type: WS_CLOSE})).toEqual({
            ...initialState, 
            status: 'offline'
        })
    })

    it('тестирование редьюсера отключения от интернета', () => {
        expect(reducer(initialState, {type: WS_DISCONNECT})).toEqual({
            ...initialState,
            status: 'offline'
        })
    })

    it('тестирование рельюсера подключения к вебсокету', () => {
        expect(reducer(initialState, {type: WS_CONNECT})).toEqual({
            ...initialState, 
            status: 'online'
        })
    })
    
    afterEach(() => {
        reducer(initialState, {type: CLEAR_STATE_WSHISTORY_REDUCER})
    })
})
export const WS_CONNECT: 'WS_CONNECT' = 'WS_CONNECT';
export const WS_DISCONNECT: 'WS_DISCONNECT' = 'WS_DISCONNECT';
export const WS_CONNECTING: 'WS_CONNECTING' = 'WS_CONNECTING';
export const WS_OPEN: 'WS_OPEN' = 'WS_OPEN';
export const WS_CLOSE: 'WS_CLOSE' = 'WS_CLOSE';
export const WS_MESSAGE: 'WS_MESSAGE' = 'WS_MESSAGE';
export const WS_ERROR: 'WS_ERROR' = 'WS_ERROR';
export const GET_CURRENT_ORDER: 'GET_CURRENT_ORDER' = 'GET_CURRENT_ORDER'
export const CLEAR_STATE_WSREDUCER: 'CLEAR_STATE_WSREDUCER' = 'CLEAR_STATE_WSREDUCER';

export const WSActions = {
    WS_CONNECT,
    WS_DISCONNECT,
    WS_CONNECTING,
    WS_OPEN,
    WS_CLOSE,
    WS_MESSAGE,
    WS_ERROR,
    GET_CURRENT_ORDER
}

interface IClearState {
    readonly type: typeof CLEAR_STATE_WSREDUCER;
}

interface IConnecting {
    readonly type: typeof WS_CONNECTING,
    payload: string
}

interface IDissconnect {
    readonly type: typeof WS_DISCONNECT
}

interface IOpen {
    readonly type: typeof WS_OPEN
}

interface IMessage {
    readonly type: typeof WS_MESSAGE;
    payload: any;
}

interface IError {
    readonly type: typeof WS_ERROR;
    payload: any;
}

interface IClose {
    readonly type: typeof WS_CLOSE;
}

interface IConnect {
    readonly type: typeof WS_CONNECT;
}

interface IGetCurrentOrder {
    readonly type: typeof GET_CURRENT_ORDER;
    payload: string | number
}

export type TWSActions = IConnecting |
IConnect |
IOpen |
IMessage |
IError |
IClose |
IDissconnect |
IGetCurrentOrder |
IClearState
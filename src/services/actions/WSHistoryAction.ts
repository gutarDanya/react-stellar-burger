export const WS_CONNECT: 'WS_CONNECT' = 'WS_CONNECT';
export const WS_DISCONNECT: 'WS_DISCONNECT' = 'WS_DISCONNECT';
export const WS_CONNECTING: 'WS_CONNECTING' = 'WS_CONNECTING';
export const WS_OPEN: 'WS_OPEN' = 'WS_OPEN';
export const WS_CLOSE: 'WS_CLOSE' = 'WS_CLOSE';
export const WS_MESSAGE: 'WS_MESSAGE' = 'WS_MESSAGE';
export const WS_ERROR: 'WS_ERROR' = 'WS_ERROR';
export const CLEAR_STATE_WSHISTORY_REDUCER: 'CLEAR_STATE_WSHISTORY_REDUCER' = 'CLEAR_STATE_WSHISTORY_REDUCER';

export const WSHistoryActions = {
    WS_CONNECT,
    WS_DISCONNECT,
    WS_CONNECTING,
    WS_OPEN,
    WS_CLOSE,
    WS_MESSAGE,
    WS_ERROR
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

interface IClearState {
    readonly type: typeof CLEAR_STATE_WSHISTORY_REDUCER
};

export type TWSHistoryActions = IConnecting |
IConnect |
IOpen |
IMessage |
IError |
IClose |
IDissconnect | 
IClearState
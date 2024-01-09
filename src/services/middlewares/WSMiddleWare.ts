import { Middleware } from "redux";
import { WSActions } from "../actions/WSAction";
import { WSHistoryActions } from "../actions/WSHistoryAction";
// socketMiddleware.ts

export const socketMiddleware = (wsActions: any): Middleware => {
  return ((store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { type } = action
      const { dispatch } = store;

      const {
        WS_CONNECTING,
        WS_CONNECT,
        WS_ERROR,
        WS_CLOSE,
        WS_DISCONNECT,
        WS_MESSAGE,
        WS_OPEN
      } = wsActions;

      if (WS_CONNECTING === type) {
        const url = action.payload
        socket = new WebSocket(url);
        dispatch({ type: WS_CONNECT })
      }

      if (socket) {
        //СОБЫТИЕ ОТКРЫТИЯ СОЕДИНЕНИЯ ДИСПАЧИТ СТАТУС СОЕДИНЕНИЯ ОНЛАЙН
        socket.onopen = () => {
          dispatch({ type: WS_OPEN })
        };

        //СОБЫТИЕ ОШИБКИ СОЕДИНЕНИЯ ЕСЛИ ПРОБЛЕМЫ С ЗАПРОСОМ ДИСПАЧИТ СООТВЕТСТВЕННО ОШИБКУ И ВЫВОДИТ ЕЁ В КОНСОЛЬ
        socket.onerror = (evt) => {
          dispatch({ type: WS_ERROR, payload: evt })
        }

        //СОБЫТИЕ ПОЛУЧЕНИЯ ДАННЫХ С СЕРВЕРА, ПОЛУЧАЕТСЯ ДАННЫЕ И ОТПРАВЛЯЕТ ИХ В РЕДЮСЕР, а так же выводит данные в консоль
        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          dispatch({ type: WS_MESSAGE, payload: data })
        }

        //ЕСЛИ КЛИЕНТ САМ ЗАКРЫЛ СОЕДИНЕНИЕ С СЕРВЕРОМ: ПРОИСХОДИТ ЗАКРЫТИЕ СОКЕТА, А ТАК ЖЕ
        if (type === WS_CLOSE) {
          socket.close(1000, 'server closed success')
          socket.onclose = (event) => {
            console.log(event)
            dispatch({ type: WS_CLOSE })
          }
        }

        //ЕСЛИ ПРОИЗОШЛА ОШИБКА СОБЫТИЕ
        socket.onclose = (event) => {
          console.log(event);
          dispatch({ type: WS_DISCONNECT })
        }
      }

      next(action);
    };
  }) as Middleware;
};


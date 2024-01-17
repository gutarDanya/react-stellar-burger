export const baseUrl = 'https://norma.nomoreparties.space/api';
export const wsUrl = 'wss://norma.nomoreparties.space'

export function checkResponse(res: Response) {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка ${res.status}`)
    }
}

export enum WSEnum {
    connectig = 'connectig',
    online = 'online',
    offline = 'offline'
}
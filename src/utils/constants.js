export const baseUrl = 'https://norma.nomoreparties.space/api';

export function checkResponse(res) {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка ${res.status}`)
    }
}
import { baseUrl, checkResponse } from "../../utils/constants";
import { getCookie, setCookie, deleteCookie } from "../../utils/auth";

export const REGISTARTION_ACTION = 'REGISTARTION_ACTION';
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';
export const GET_USER_INFO = 'GET_USER_UNFO';

//Функция Регистарции

interface IregisterArg {
    email: string;
    password: string;
    name: string
}

export const userRegister = ({ email, password, name } : IregisterArg) => {
    return async function (dispatch:any) {
         await fetch(`${baseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
                name
            })
        })
            .then(checkResponse)
            .then((res) => {
                console.log('something')
                dispatch({
                    type: REGISTARTION_ACTION,
                    payload: res
                })
                setCookie('accessToken', res.accessToken.split('Bearer ')[1])
                setCookie('refreshToken', res.refreshToken)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

//Функция входа в учётку

interface ILoginArg {
    email: string;
    password: string;
}

export const userLogin = ({ email, password }: ILoginArg) => {
    return async function (dispatch:any) {
        await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(checkResponse)
            .then((res) => {
                //Здесь ты проверяешь если запрос прошёл удачно, то в редакс обновляешь состояние, что ты теперь авторизован
                if (res.success) {
                    dispatch({
                        type: LOGIN_ACTION,
                        payload: res.success
                    })
                    // console.log(success)
                    // console.log(accessToken.split('Bearer ')[1])
                    //Здесь ты сетишь в куки, свой токен, по которому в дальнейшем будешь проходить аутентификацию
                    setCookie('accessToken', res.accessToken.split('Bearer ')[1])
                    setCookie('refreshToken', res.refreshToken)
                    sessionStorage.setItem('logined', 'true')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

//Функция выхода из учётки

export const userLogout = () => {
    return async function(dispatch: any) {
         await fetch(`${baseUrl}/auth/logout`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: getCookie('refreshToken')
            })
        })
            .then(checkResponse)
            .then((res) => {
                //Здесь иы проверяешь, если запрос прошёл удачно, то в редаксе указываешь, что ты теперь не авторизован в системе
                console.log(res)
                if (res.success) {
                    dispatch({
                        type: LOGIN_ACTION,
                        payload: res.success
                    })
                    //Здесь ты удаляешь свой токен, что бы не могла пройти аутентификация тебя как пользователя
                    deleteCookie('accessToken');
                    sessionStorage.removeItem('logined')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

//Функция Обновления токена

export const refreshToken = () => {
    return async function (dispatch: any) {
        await fetch(`${baseUrl}/auth/token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: getCookie('refreshToken')
            })
        })
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                setCookie('accessToken', res.accessToken.split('Bearer ')[1])
            }
        })
    }
}

//Функция аутентификии

export const authUser = () => {
    return async function(dispatch: any) {
        await fetch(`${baseUrl}/auth/user`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                authorization: 'Bearer ' + getCookie('accessToken')
            }
        })
        .then(checkResponse)
        .then((res) => {
            //Здесь тебе нужно, что бы проверялось, что в системе авторизован именно ты
            if (res.success) {
                console.log(res)
                dispatch({
                    type: GET_USER_INFO,
                    payload: res
                })
                sessionStorage.setItem('logined', 'true')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


//Функция изменения данных о пользователе

interface IPatchDataArg {
    email: string;
    name: string;
    password: string;
}

export const patchDataUser = ({email, name, password}: IPatchDataArg ) => {
    return async function(dispatch: any) {
        await fetch(`${baseUrl}/auth/user`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                authorization: 'Bearer ' + getCookie('accessToken')
            },
            body: JSON.stringify({
                'email': email,
                name: name,
                password: password
            })
        })
        .then(checkResponse)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

//Функция ресета пароля

interface IResetPasswordArg {
    password: string;
    token: string;
}

export const ResetPassword = ({password, token}: IResetPasswordArg) => {
    return async function(dispatch: any) {
        await fetch(`${baseUrl}/password-reset/reset`, {
           method: 'POST',
           headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify({
            password: password,
            token: token
           })
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

interface IRegistartion {
    readonly type: typeof REGISTARTION_ACTION;
    payload: {success: boolean};
}

interface ILogin {
    readonly type: typeof LOGIN_ACTION;
    payload: ILoginArg
}

interface ILogout {
    readonly type: typeof LOGOUT_ACTION;
    payload: ILoginArg
}

interface IGetUserInfo {
    readonly type: typeof GET_USER_INFO;
    payload: {
        name: string;
        email: string;
        success: true;
    }
}

export type AuthActions = IRegistartion |
ILogin |
ILogout |
IGetUserInfo;
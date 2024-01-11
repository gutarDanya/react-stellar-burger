import React, {  useRef, useState } from "react";
import styles from './LoginPage.module.css'
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from "../../../services/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { setEmailValue, setPasswordValue } from "../../../services/actions/inputAction";
import { useAppDispatch } from "../../../services/hooks/reduxHooks";

export const LoginPage = () => {

    const emailValue = useSelector((state: IReducer) => state.inputReducer.emailValue);
    const passwordValue = useSelector((state: IReducer) => state.inputReducer.passwordValue)

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const userLoginToProfile = async (evt: any) => {
        evt.preventDefault()
        await dispatch(userLogin({
            email: emailValue,
             password: passwordValue
            })
        )
        navigate('/', {replace: true})
    }
    
    
    return (
        <form className={styles.container}
        onSubmit={userLoginToProfile}>
            <div className={styles.window}>
            <h1 className={styles.header}>Вход</h1>
            <Input type='text'
            placeholder="E-mail"
            name='emailInput'
            error={false}
            size='default'
            extraClass='ml-1'
            ref={emailRef}
            value={emailValue}
            onChange={e => dispatch(setEmailValue(e.target.value))}
            />
            <Input
            type='text'
            placeholder="Пароль"
            name='password'
            error={false}
            size='default'
            extraClass="ml-1"
            ref={passwordRef}
            value={passwordValue}
            onChange={e => dispatch(setPasswordValue(e.target.value))}
            />
            <Button 
            htmlType="submit"
            size='small'
            onClick={userLoginToProfile}>
                Войти
            </Button>
            <p className={styles.text}>Вы - новый пользователь? <Link data-testid='someLink' className="text text_type_main-default" to='/registration'>Зарегестрироваться</Link></p>
            <p className={styles.text}>Забыли пароль? <Link className="text text_type_main-default" to='/forgot-password'>Восстановить пароль</Link></p>
            </div>
        </form>
    )
}

interface IReducer {
    inputReducer: any;
}
import React, {  useRef } from "react";
import styles from './LoginPage.module.css'
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { userLogin } from "../../../services/actions/AuthAction";
import { useDispatch } from "react-redux";

export const LoginPage = () => {

    const dispatch = useDispatch();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const userLoginToProfile = (evt) => {
        evt.preventDefault()
        dispatch(userLogin({
            email: emailRef.current.value,
             password: passwordRef.current.value
            })
        )
    }
    
    
    return (
        <main className={styles.container}>
            <div className={styles.window}>
            <h1 className={styles.header}>Вход</h1>
            <Input type='text'
            placeholder="E-mail"
            name='emailInput'
            error={false}
            size='default'
            extraClass='ml-1'
            ref={emailRef}
            />
            <Input
            type='text'
            placeholder="Пароль"
            name='password'
            error={false}
            size='default'
            extraClass="ml-1"
            ref={passwordRef}
            />
            <Button 
            htmlType="submit"
            size='small'
            onClick={userLoginToProfile}>
                Войти
            </Button>
            <p className={styles.text}>Вы - новый пользователь? <Link to='/registration'>Зарегестрироваться</Link></p>
            <p className={styles.text}>Забыли пароль? <Link to='/forgot-password'>Восстановить пароль</Link></p>
            </div>
        </main>
    )
}
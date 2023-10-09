import React from "react";
import styles from './LoginPage.module.css'
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom'

export const LoginPage = () => {
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
            />
            <Input
            type='text'
            placeholder="Пароль"
            name='password'
            error={false}
            size='default'
            extraClass="ml-1"
            />
            <Button 
            size='small'>
                Войти
            </Button>
            <p className={styles.text}>Вы - новый пользователь? <Link to='/registration'>Зарегестрироваться</Link></p>
            <p className={styles.text}>Забыли пароль? <Link to='/forgot-password'>Восстановить пароль</Link></p>
            </div>
        </main>
    )
}
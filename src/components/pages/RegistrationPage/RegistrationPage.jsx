import React from 'react';
import styles from './RegistrationPage.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom'

export const RegistrationPage = () => {
    return(
        <main className={styles.container}>
            <div className={styles.window}>
            <h1 className={styles.header}>Зарегестрироваться</h1>
            <Input type='text'
            placeholder="Имя"
            name='emailInput'
            error={false}
            size='default'
            extraClass='ml-1'
            />
            <Input type='text'
            placeholder="E-mail"
            name='emailInput'
            error={false}
            size='default'
            extraClass='ml-1'
            />
            <Input type='text'
            placeholder="Пароль"
            name='emailInput'
            error={false}
            size='default'
            extraClass='ml-1'
            icon='ShowIcon'
            />
            <Button 
            size='small'>
                Зарегестрироваться
            </Button>
            <p className={styles.text}>Уже зарегистрированы? <Link to='/login'>Войти</Link></p>
            </div>
        </main>
    )
}
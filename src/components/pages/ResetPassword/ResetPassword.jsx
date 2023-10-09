import React from 'react';
import styles from './ResetPassword.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export const ResetPasswordPage = () => {
    return(
        <main className={styles.container}>
            <div className={styles.window}>
            <h1 className={styles.header}>Восстановление пароля</h1>
            <Input
            type='text'
            placeholder="Введите новый пароль"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='ShowIcon'
             />
             <Input
            type='text'
            placeholder="Введите код из письма"
            name='taken-password'
            error={false}
            size='default'
            extraClass="ml-1"
             />
             <Button
             size='small'>
                Сохранить
             </Button>
             <p className={styles.text}>Вспомнили пароль?</p>
             </div>
        </main>
    )
}
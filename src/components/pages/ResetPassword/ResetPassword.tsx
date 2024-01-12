import React from 'react';
import styles from './ResetPassword.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { setPasswordValue, setResetMessage } from '../../../services/actions/inputAction';
import { ResetPassword } from '../../../services/actions/AuthAction';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/reduxHooks';

export const ResetPasswordPage = () => {

    const dispatch = useAppDispatch();

    const passwordValue = useAppSelector(state => state.inputReducer.passwordValue);
    const resetMessage = useAppSelector(state => state.inputReducer.resetMessage);

    const handleSubmit = () => {
        dispatch(ResetPassword({password: passwordValue, token: resetMessage}))
    }

    return(
        <form className={styles.container}
        onSubmit={handleSubmit}>
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
            value={passwordValue}
            onChange={e => dispatch(setPasswordValue(e.target.value))}
             />
             <Input
            type='text'
            placeholder="Введите код из письма"
            name='taken-password'
            error={false}
            size='default'
            extraClass="ml-1"
            value={resetMessage}
            onChange={e => dispatch(setResetMessage(e.target.value))}
             />
             <Button
             htmlType='submit'
             size='small'>
                Сохранить
             </Button>
             <p className={styles.text}>Вспомнили пароль?</p>
             </div>
        </form>
    )
}
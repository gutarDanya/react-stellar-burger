import React from 'react';
import styles from './ResetPassword.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { setPasswordValue, setResetMessage } from '../../../services/actions/inputAction';
import { ResetPassword } from '../../../services/actions/AuthAction';

export const ResetPasswordPage = () => {

    const dispatch = useDispatch();

    const passwordValue = useSelector((state: IReducer) => state.inputReducer.passwordValue);
    const resetMessage = useSelector((state: IReducer) => state.inputReducer.resetMessage);

    const handleSubmit = () => {
        dispatch(ResetPassword({password: passwordValue, token: resetMessage}))
    }

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
             size='small'
             onClick={handleSubmit}>
                Сохранить
             </Button>
             <p className={styles.text}>Вспомнили пароль?</p>
             </div>
        </main>
    )
}

interface IReducer {
    inputReducer: any;
}
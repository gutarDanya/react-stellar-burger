import React from "react";
import styles from './ForgotPassword.module.css';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getRequestPassword } from "../../../services/actions/forgotPasswordAction";
import { CHANGE_VALUE_OF_RESET } from "../../../services/actions/forgotPasswordAction";

export const ForgotPasswordPage = () => {

    const dispatch = useDispatch();

    const request = useSelector(state => state.forgotPasswordReducer.request);
    const currentValue = useSelector(state => state.forgotPasswordReducer.currentValue);

    const inputValueAdd = (value) => {
        dispatch({type:CHANGE_VALUE_OF_RESET, payload: value})
        console.log(currentValue)
    }

    const inputRef = React.useRef();

    const sendEmail = () => {
    }

    return (
        <main className={styles.container}>
            <div className={styles.window}>
            <h1 className={styles.header}>Восстановление пароля</h1>
            <Input
            type='text'
            placeholder="укажите e-mail"
            onChange={e => inputValueAdd(e.target.value)}
            name='name'
            error={false}
            ref={inputRef}
            size='default'
            extraClass="ml-1"
             />
             <Button
             htmlType="submit"
             size='small'
             onClick={sendEmail}>
                Восстановить
             </Button >
             <p className={`${styles.text} text text_dark-grey-secondary-text`}>Вспомнили пароль?<Link to='/login'>Войдите</Link></p>
             </div>
        </main>
    )
}
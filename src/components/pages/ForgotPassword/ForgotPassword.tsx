import React, { useEffect } from "react";
import styles from './ForgotPassword.module.css';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getRequestPassword } from "../../../services/actions/forgotPasswordAction";
import { setEmailValue } from "../../../services/actions/inputAction";
import { useAppDispatch, useAppSelector } from "../../../services/hooks/reduxHooks";

export const ForgotPasswordPage = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const emailValue = useAppSelector(state => state.inputReducer.emailValue);
    const request = useAppSelector(state => state.forgotPasswordReducer.success);


    //const inputRef = React.useRef<HTMLDivElement | null>(null);

    const sendEmail = () => {
        dispatch(getRequestPassword(emailValue))
        navigate('/reset-password')
        }

    return (
        <form className={styles.container}
        onSubmit={sendEmail}>
            <div className={styles.window}>
            <h1 className={styles.header}>Восстановление пароля</h1>
            <Input
            type='text'
            placeholder="укажите e-mail"
            onChange={e => dispatch(setEmailValue(e.target.value))}
            value={emailValue}
            name='name'
            error={false}
            //ref={inputRef}
            size='default'
            extraClass="ml-1"
             />
             <Button
             htmlType="submit"
             size='small'>
                Восстановить
             </Button >
             <p className={`${styles.text} text text_dark-grey-secondary-text`}>Вспомнили пароль?<Link className={styles.text} to='/login'>Войдите</Link></p>
             </div>
        </form>
    )
}
import React, { useRef } from 'react';
import styles from './RegistrationPage.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../../../services/actions/AuthAction';
import { setNameValue, setEmailValue, setPasswordValue } from '../../../services/actions/inputAction';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/reduxHooks';

export const RegistrationPage = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const nameValue = useAppSelector(state => state.inputReducer.nameValue);
    const emailValue = useAppSelector(state => state.inputReducer.emailValue);
    const passwordValue = useAppSelector(state => state.inputReducer.passwordValue);

    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    console.log()

    const register = (evt: any) => {
        evt.preventDefault();
        dispatch(userRegister({
            email: emailValue,
             password: passwordValue,
              name: nameValue
            })
        )
        navigate('/', {replace: true})
    }

    return(
        <form className={styles.container}
        onSubmit={register}>
            <div className={styles.window}>
            <h1 className={styles.header}>Зарегестрироваться</h1>
            <Input type='text'
            ref={nameRef}
            placeholder="Имя"
            name='emailInput'
            error={false}
            size='default'
            extraClass='ml-1'
            value={nameValue}
            onChange={e => dispatch(setNameValue(e.target.value))}
            />
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
            <Input type='text'
            ref={passwordRef}
            placeholder="Пароль"
            name='emailInput'
            error={false}
            size='default'
            extraClass='ml-1'
            icon='ShowIcon'
            value={passwordValue}
            onChange={e => dispatch(setPasswordValue(e.target.value))}
            />
            <Button
            htmlType='submit'
            size='small'>
                Зарегестрироваться
            </Button>
            <p className={styles.text}>Уже зарегистрированы? <Link to='/login'>Войти</Link></p>
            </div>
        </form>
    )
}
import React, { useRef } from 'react';
import styles from './RegistrationPage.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { userRegister } from '../../../services/actions/AuthAction';
import { useDispatch, useSelector } from 'react-redux';

export const RegistrationPage = () => {

    const dispatch = useDispatch();

    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    const access = useSelector(state => state.registrationReducer);

    console.log(access)

    const register = (evt) => {
        evt.preventDefault();
        dispatch(userRegister({
            email: emailRef.current.value,
             password: passwordRef.current.value,
              name: nameRef.current.value
            })
        )
    }

    return(
        <main className={styles.container}>
            <div className={styles.window}>
            <h1 className={styles.header}>Зарегестрироваться</h1>
            <Input type='text'
            ref={nameRef}
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
            ref={emailRef}
            />
            <Input type='text'
            ref={passwordRef}
            placeholder="Пароль"
            name='emailInput'
            error={false}
            size='default'
            extraClass='ml-1'
            icon='ShowIcon'
            />
            <Button
            htmlType='submit'
            onClick={register}
            size='small'>
                Зарегестрироваться
            </Button>
            <p className={styles.text}>Уже зарегистрированы? <Link to='/login'>Войти</Link></p>
            </div>
        </main>
    )
}
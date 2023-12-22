import React, { useRef } from 'react';
import styles from './RegistrationPage.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../../../services/actions/AuthAction';
import { useDispatch, useSelector } from 'react-redux';
import { setNameValue, setEmailValue, setPasswordValue } from '../../../services/actions/inputAction';

export const RegistrationPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nameValue = useSelector((state: IReducer) => state.inputReducer.nameValue);
    const emailValue = useSelector((state: IReducer) => state.inputReducer.emailValue);
    const passwordValue = useSelector((state: IReducer) => state.inputReducer.passwordValue);

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
            onClick={register}
            size='small'>
                Зарегестрироваться
            </Button>
            <p className={styles.text}>Уже зарегистрированы? <Link to='/login'>Войти</Link></p>
            </div>
        </main>
    )
}

interface IReducer {
    inputReducer: any;
}
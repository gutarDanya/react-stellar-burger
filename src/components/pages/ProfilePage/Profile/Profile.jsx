import React, { useRef } from "react";
import styles from './Profile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setEmailValue, setNameValue, setPasswordValue } from "../../../../services/actions/inputAction";

export const Profile = () => {

    const nameValue = useSelector(state => state.inputReducer.nameValue)
    const emailValue = useSelector(state => state.inputReducer.emailValue);
    const passwordValue = useSelector(state => state.inputReducer.passwordValue);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const dispatch = useDispatch();

    return(
        <div className={styles.inputs}>
            <Input
            type='text'
            placeholder="Имя"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='EditIcon'
            ref={nameRef}
            value={nameValue}
            onChange={e => dispatch(setNameValue(e.target.value))}
             />
             <Input
            type='email'
            placeholder="Логин"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='EditIcon'
            ref={emailRef}
            value={emailValue}
            onChange={e => dispatch(setEmailValue(e.target.value))}
             />
             <Input
            type='password'
            placeholder="пароль"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='HideIcon'
            ref={passwordRef}
            value={passwordValue}
            onChange={e => dispatch(setPasswordValue(e.target.value))}
             />
            </div>
    )
}
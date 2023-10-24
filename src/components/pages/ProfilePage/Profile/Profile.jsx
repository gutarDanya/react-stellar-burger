import React, { useRef } from "react";
import styles from './Profile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const Profile = () => {

    const params = useParams();

    console.log(params)

   const somethink = useSelector(state => state.loginReducer)
   console.log(somethink)

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const dispatch = useDispatch();

    const sendCurrentData = (value) => {
        
    }

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
             />
             <Input
            type='password'
            placeholder="пароль"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='EditIcon'
            ref={passwordRef}
             />
            </div>
    )
}
import React from "react";
import styles from './Profile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";

export const Profile = () => {

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
             />
             <Input
            type='email'
            placeholder="Логин"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='EditIcon'
             />
             <Input
            type='password'
            placeholder="пароль"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='EditIcon'
             />
            </div>
    )
}
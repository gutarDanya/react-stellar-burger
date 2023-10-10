import React from "react";
import styles from './ProfilePage.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';

export const ProfilePage = () => {

    return(
        <main className={styles.container}>
            <div className={styles.window}>
                <div className={styles.navigation}>
                    <Link>
                        <p>Профиль</p>
                    </Link>
                    <Link>
                        <p>История заказов</p>
                    </Link>
                    <Link>
                        <p>Выход</p>
                    </Link>
                    <p className={styles.text}>В этом разделе вы можете изменить свои персональные данные</p>
                </div>
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
            </div>
        </main>
    )
}
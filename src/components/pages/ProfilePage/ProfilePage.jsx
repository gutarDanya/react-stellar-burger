import React from "react";
import styles from './ProfilePage.module.css';
import { Link, NavLink } from 'react-router-dom';
import { Profile } from "./Profile/Profile";

export const ProfilePage = () => {


    return(
        <main className={styles.container}>
            <div className={styles.window}>
                <div className={styles.navigation}>
                    <NavLink className={styles.link}>
                        <p >Профиль</p>
                    </NavLink>
                    <NavLink className={styles.inactiveLink}>
                        <p>История заказов</p>
                    </NavLink>
                    <NavLink className={styles.inactiveLink}>
                        <p>Выход</p>
                    </NavLink>
                    <p className={styles.text}>В этом разделе вы можете изменить свои персональные данные</p>
                </div>
            <Profile />
            </div>
        </main>
    )
}
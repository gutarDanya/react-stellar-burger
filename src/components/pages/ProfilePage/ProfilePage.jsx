import React from "react";
import styles from './ProfilePage.module.css';
import { Link } from 'react-router-dom';
import { Profile } from "./Profile/Profile";

export const ProfilePage = () => {


    return(
        <main className={styles.container}>
            <div className={styles.window}>
                <div className={styles.navigation}>
                    <Link className={styles.link}>
                        <p >Профиль</p>
                    </Link>
                    <Link className={styles.inactiveLink}>
                        <p>История заказов</p>
                    </Link>
                    <Link className={styles.inactiveLink}>
                        <p>Выход</p>
                    </Link>
                    <p className={styles.text}>В этом разделе вы можете изменить свои персональные данные</p>
                </div>
            <Profile />
            </div>
        </main>
    )
}
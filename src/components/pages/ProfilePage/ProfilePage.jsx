import React, {useEffect} from "react";
import styles from './ProfilePage.module.css';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { Profile } from "./Profile/Profile";

export const ProfilePage = () => {
    return(
        <main className={styles.container}>
            <div className={styles.window}>
                <div className={styles.navigation}>
                    <NavLink className={({isActive}) => isActive ? styles.link : styles.inactiveLink} to={'/profile/:user-profile'}>
                        <p >Профиль</p>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.link : styles.inactiveLink} to={'/profile/:order-history'}>
                        <p>История заказов</p>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.link : styles.inactiveLink} to={'/'}>
                        <p>Выход</p>
                    </NavLink>
                    <p className={styles.text}>В этом разделе вы можете изменить свои персональные данные</p>
                </div>
            <Outlet/>
            </div>
        </main>
    )
}
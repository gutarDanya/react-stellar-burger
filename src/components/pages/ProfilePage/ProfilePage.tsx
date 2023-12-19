import React from "react";
import styles from './ProfilePage.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { authUser, patchDataUser, refreshToken, userLogout } from "../../../services/actions/AuthAction";
import { useAppDispatch } from "../../../services/hooks/reduxHooks";

export const ProfilePage = () => {

    const dispatch = useAppDispatch();

    const exitProfile = () => {
        dispatch(userLogout())
    }

    const fuckingTest = () => {
        dispatch(refreshToken())
    }

    return(
        <main className={styles.container}>
            <div className={styles.window}>
                <div className={styles.navigation}>
                    <NavLink className={({isActive}) => isActive ? styles.link : styles.inactiveLink} to={'/profile/:user-profile'}>
                        <p >Профиль</p>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.link : styles.inactiveLink} to={'/profile/:order-history'} onClick={fuckingTest}>
                        <p>История заказов</p>
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.link : styles.inactiveLink} to={'/'} onClick={exitProfile}>
                        <p>Выход</p>
                    </NavLink>
                    <p className={styles.text}>В этом разделе вы можете изменить свои персональные данные</p>
                </div>
            <Outlet/>
            </div>
        </main>
    )
}
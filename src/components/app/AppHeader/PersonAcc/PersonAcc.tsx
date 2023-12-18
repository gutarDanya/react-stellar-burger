import React from 'react'

import styles from './PersonAcc.module.css'

import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../services/hooks/reduxHooks';
import { ACTIVE_LINK_IS_PROFILE } from '../../../../services/actions/headerAction';

function PersonAcc () {

    const dispatch = useAppDispatch();

    const status = useAppSelector(state => state.headerReducer.profile);
    const clickToChange = () => {
        dispatch({type: ACTIVE_LINK_IS_PROFILE})
    }
    return (
            <Link to='/profile/:user-profile' onClick={clickToChange} className={styles.container}>
            <ProfileIcon type={status? 'primary' : 'secondary'}/>
            <p className={`text text_type_main-default ${status? styles.active : styles.inactive}`}>Личный кабинет</p>
            </Link>
    )
};

export default PersonAcc;
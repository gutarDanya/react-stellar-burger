import React, { useEffect } from 'react'
import styles from './Constructor.module.css'
import { Link, useLocation } from 'react-router-dom';

import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppDispatch, useAppSelector } from '../../../../../services/hooks/reduxHooks';
import { ACTIVE_LINK_IS_CONSTRUCTOR } from '../../../../../services/actions/headerAction';

function Constructor () {
    const dispatch = useAppDispatch();

    const clickToChange = () => {
        dispatch({type: ACTIVE_LINK_IS_CONSTRUCTOR})
    }

    const status = useAppSelector(state => state.headerReducer.constructor)

    return (
        <button className={styles.button} data-testid='constructor-button'>
        <Link onClick={clickToChange} to='/' className={`${styles.constructor} ` }>
            <BurgerIcon type={status? 'primary' : 'secondary'}/> <p className={status? styles.active : styles.inactive}>Конструктор</p>
        </Link>
        </button>
    )
}

export default Constructor;
import React from 'react'

import styles from './Sheets.module.css'
import { Link, useLocation } from 'react-router-dom'

import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppDispatch, useAppSelector } from '../../../../../services/hooks/reduxHooks'
import { ACTIVE_LINK_IS_ORDERS } from '../../../../../services/actions/headerAction'
function Sheets () {

    const dispatch = useAppDispatch();

    const clickToChange = () => {
        dispatch({type: ACTIVE_LINK_IS_ORDERS})
    };

    const status = useAppSelector(state => state.headerReducer.orders);
    return (
        <Link to='/feed' onClick={clickToChange} className={styles.container}>
        <button className={styles.sheets}>
            <ListIcon type={status? 'primary' : 'secondary'}/>
            <h2 className={`text text_type_main-default ${status? styles.active : styles.inactive}`}> Лента заказов</h2>
        </button>
        </Link>
    )
}

export default Sheets;
import React from 'react'

import styles from './Sheets.module.css'
import { Link } from 'react-router-dom'

import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components'
function Sheets () {
    return (
        <Link to='/feed'>
        <button className={styles.sheets}>
            <ListIcon type='secondary'/>
            <h2 className={styles.text}>Лента заказов</h2>
        </button>
        </Link>
    )
}

export default Sheets;
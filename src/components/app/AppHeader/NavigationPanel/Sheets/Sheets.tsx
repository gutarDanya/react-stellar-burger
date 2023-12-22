import React from 'react'

import styles from './Sheets.module.css'

import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components'
function Sheets () {
    return (
        <button className={styles.sheets}>
            <ListIcon type='secondary'/>
            <h2 className={styles.text}>Лента заказов</h2>
        </button>
    )
}

export default Sheets;
import React from 'react'
import styles from './Constructor.module.css'

import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function Constructor () {
    return (
        <button className={styles.constructor}>
            <BurgerIcon/> Конструктор
        </button>
    )
}

export default Constructor
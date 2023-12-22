import React from 'react'
import styles from './Constructor.module.css'
import { Link } from 'react-router-dom';

import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function Constructor () {
    return (
        <Link to='/' className={`${styles.constructor}`}>
            <BurgerIcon type='primary'/> Конструктор
        </Link>
    )
}

export default Constructor;
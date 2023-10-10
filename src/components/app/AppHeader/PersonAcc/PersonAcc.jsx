import React from 'react'

import styles from './PersonAcc.module.css'

import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function PersonAcc () {
    return (
        <button className={styles.acc}>
            <ProfileIcon type='secondary'/>
            <Link to='/profile'>
            <h2 className={styles.text}>Личный кабинет</h2>
            </Link>
        </button>
    )
};

export default PersonAcc;
import React from 'react'

import styles from './PersonAcc.module.css'

import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function PersonAcc () {
    return (
        <button className={styles.acc}>
            <ProfileIcon type='secondary'/>
            <h2 className={styles.text}>Личный кабинет</h2>
        </button>
    )
};

export default PersonAcc;
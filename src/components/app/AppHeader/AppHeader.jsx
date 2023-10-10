import React from 'react'
import styles from './AppHeader.module.css'

import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import NavigationPanel from './NavigationPanel/NavigationPanel.jsx';
import PersonAcc from './PersonAcc/PersonAcc.jsx';

function AppHeader () {
    return (
        <header className={styles.header}>
            <NavigationPanel />
            <Logo />
            <PersonAcc />
        </header>
    )
}

export default AppHeader
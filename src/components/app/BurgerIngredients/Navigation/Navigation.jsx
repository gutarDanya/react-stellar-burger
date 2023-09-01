import React from 'react';

import styles from './Navigation.module.css'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function Navigation () {
    const [current, setCurrent] = React.useState('one')
    return (
        <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начиники
      </Tab>
    </div>
    )
}

export default Navigation
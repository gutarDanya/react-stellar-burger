import React from 'react';

import styles from './Navigation.module.css'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { getCurrentTab } from '../../../../services/actions/scrollIngredientsAction';
import { useAppSelector } from '../../../../services/hooks/reduxHooks';

function Navigation () {

  const current = useAppSelector(state => state.scrollReducer.currentTab)

    return (
        <div className={styles.panel}>
      <Tab value="one" active={current === 'one'} onClick={() => getCurrentTab('one')}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={() =>getCurrentTab('two')}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={() => getCurrentTab('three')}>
        Начиники
      </Tab>
    </div>
    )
}

export default Navigation
import React from 'react';

import styles from './Souses.module.css';
import { data } from '../../../../utils/data';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Souce } from './Souce/Souce';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

function Souses ({openPopup}) {

    const ingredients = useSelector(store => store.apiReducer.ingredientData)


    return (
        <section>
            <h3 className={styles.title}>Соусы</h3>
            <nav className={styles.container}>
            {ingredients && ingredients.length > 0 && ingredients.map((souses, i) => {
                if (souses.type === 'sauce') {
                    return (
                       <Souce souses={souses} openPopup={openPopup} key={i}/>
                    )
                }
            })}
            </nav>
        </section>
    )
}

export default Souses;
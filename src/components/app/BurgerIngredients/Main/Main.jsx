import React from 'react';
import { Filling } from './Filling/Filling';
import styles from './Main.module.css';
import { data } from '../../../../utils/data';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';

function Main({openPopup}) {

    const ingredients = useSelector(store => store.apiReducer.ingredientData)
    
    return (
        <section>
            <h3 className={styles.title}>Начинка</h3>
            <nav className={styles.container}>
                {ingredients && ingredients.length > 0 && ingredients.map((filling, i) => {
                    if (filling.type === 'main') {
                        return (
                            <Filling filling={filling} openPopup={openPopup} key={i}/>
                        )
                    }
                })}
            </nav>
        </section>
    )
}

export default Main

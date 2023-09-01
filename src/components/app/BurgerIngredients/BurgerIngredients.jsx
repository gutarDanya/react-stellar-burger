import React, {useRef, useEffect} from 'react';

import styles from './BurgerIngredients.module.css'

import Navigation from './Navigation/Navigation';
import ModalInfoIngredients from './ModalInfoIngredients/ModalInfoIngredients';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientList } from './IngredientList/IngredientList';

function BurgerIngredients () {
    return (
        <section className={styles.burgerIngredients}>
            <h1 className={styles.text}>Соберите бургер</h1>
            <Navigation />
            <div className={`${styles.ingredients} custom-scroll`}>
            <IngredientList type='bun' title='Булки' />
            <IngredientList type='sauce' title='Соусы' />
            <IngredientList type='main' title='Начинка' />
            </div>
            <ModalInfoIngredients/>
        </section>
    )
}


export default BurgerIngredients;
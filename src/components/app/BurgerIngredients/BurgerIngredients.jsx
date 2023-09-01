import React, {useRef, useEffect} from 'react';

import styles from './BurgerIngredients.module.css'

import Navigation from './Navigation/Navigation';
import BunsSelect from './BunsSelect/BunsSelect';
import Souses from './Souses/Souses';
import Main from './Main/Main';
import ModalInfoIngredients from './ModalInfoIngredients/ModalInfoIngredients';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CURRENT_INGREDIENT_TO_MODAL, OPEN_INFO_MODAL_WINDOW, getCurrentIngredientGenerator } from '../../services/actions/currentIngredientsToModalAction';
import { useDrag } from 'react-dnd';
import { openInfoModalWindow } from '../../services/actions/currentIngredientsToModalAction';

function BurgerIngredients () {
    const dispatch = useDispatch();



    const openPopup = (ingredient) => {
        dispatch({type: OPEN_INFO_MODAL_WINDOW, payload: ingredient})
    }


    return (
        <section className={styles.burgerIngredients}>
            <h1 className={styles.text}>Соберите бургер</h1>
            <Navigation />
            <div className={`${styles.ingredients} custom-scroll`}>
            <BunsSelect openPopup={openPopup}/>
            <Souses openPopup={openPopup} />
            <Main openPopup={openPopup} />
            </div>
            <ModalInfoIngredients/>
        </section>
    )
}


export default BurgerIngredients;
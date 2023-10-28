import React, { useEffect } from 'react';

import styles from './IngredientDetails.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CLOSE_INFO_MODAL_WINDOW } from '../../../../services/actions/currentIngredientsToModalAction';
import InfoOfIngridient from './InfoOfIngredient/InfoOfIngredinet';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentIngredientToRouting, getData } from '../../../../services/actions/apiAction';

export const IngredientDetails = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const ingredients = useSelector(state => state.apiReducer.ingredientData)

    const currentIngredient = useSelector(state => state.apiReducer.currentIngredient)

    useEffect(() => {
        dispatch(getData())
        dispatch(getCurrentIngredientToRouting(id.split(':')[1]))
    }, [ingredients])

    return (
        currentIngredient
        ? (
        <div className={styles.container}>
            <img src={currentIngredient.image_large} alt={currentIngredient.name} />
            <InfoOfIngridient ingredient={currentIngredient} />
        </div>
        )
        : null
    )
}
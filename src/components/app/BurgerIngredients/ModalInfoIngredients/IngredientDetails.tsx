import React, { useEffect } from 'react';

import styles from './IngredientDetails.module.css';
import InfoOfIngridient from './InfoOfIngredient/InfoOfIngredinet';
import { useParams } from 'react-router-dom';
import { getCurrentIngredientToRouting } from '../../../../services/actions/apiAction';
import { useAppDispatch, useAppSelector } from '../../../../services/hooks/reduxHooks';

export const IngredientDetails = () => {

    const dispatch = useAppDispatch();

    const { id } = useParams();

    const ingredients = useAppSelector(state => state.apiReducer.ingredientData)

    const currentIngredient = useAppSelector(state => state.apiReducer.currentIngredient)

    useEffect(() => {
        if (id) {
        dispatch(getCurrentIngredientToRouting(id.split(':')[1]))
        }
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

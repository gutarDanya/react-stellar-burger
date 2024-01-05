import React, { useEffect } from 'react';

import styles from './IngredientDetails.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import InfoOfIngridient from './InfoOfIngredient/InfoOfIngredinet';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentIngredientToRouting } from '../../../../services/actions/apiAction';
import { useAppDispatch } from '../../../../services/hooks/reduxHooks';

export const IngredientDetails = () => {

    const dispatch = useAppDispatch();

    const { id } = useParams();

    const ingredients = useSelector((state: TReducers) => state.apiReducer.ingredientData)

    const currentIngredient = useSelector((state: TReducers) => state.apiReducer.currentIngredient)

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

type TReducers = {
    apiReducer: any;
}
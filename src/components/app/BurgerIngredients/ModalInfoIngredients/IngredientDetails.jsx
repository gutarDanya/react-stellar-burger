import React, {useEffect} from 'react';

import styles from './IngredientDetails.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CLOSE_INFO_MODAL_WINDOW } from '../../../services/actions/currentIngredientsToModalAction';
import InfoOfIngridient from './InfoOfIngredient/InfoOfIngredinet';
import { useSelector, useDispatch } from 'react-redux';

export const IngredientDetails = () => {

    const usedIngredient = useSelector(store => store.currentIngredientReducer.currentIngredient)
    return (
        <div className={styles.container}>
                <img src={usedIngredient.image_large} alt={usedIngredient.name} />
                <InfoOfIngridient ingredient={usedIngredient} />
        </div>
    )
}
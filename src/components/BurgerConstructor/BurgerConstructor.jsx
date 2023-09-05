import React, { useEffect } from 'react';

import InfoOfOrder from './InfoOfOrder/InfoOfOrder';

import styles from './BurgerConstructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getStartConstructorElementsGenerator } from '../../services/actions/ingredientsConstructorAction';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { ADDED_INGREDIENT_TO_CONSTRUCTOR } from '../../services/actions/ingredientsConstructorAction';
import { addBun, addMainIngredient } from '../../services/actions/ingredientsConstructorAction';
import { getAllIngredients } from '../../services/actions/ingredientsConstructorAction';
import { IngredientsConstructor } from './IngredientsConstructor/IngredientsConstructor';
import { addCount } from '../../services/actions/apiAction';
import { sortingIngredientsGenerator } from '../../services/actions/ingredientsConstructorAction';

function BurgerConstructor() {

    const dispatch = useDispatch();

    const bun = useSelector(state => state.constructorReducer.bun);
    const main = useSelector(state => state.constructorReducer.main);



    const [, ref] = useDrop({
        accept: 'ingredient',
        drop(item) {
            if (item.ingredient.type === 'bun') {
                dispatch(addBun(item.ingredient))
                dispatch(addCount(item.ingredient))

            } else {
                dispatch(addMainIngredient(item.ingredient))
                dispatch(addCount(item.ingredient))

            }
        }
    })


    return (
        <nav className={styles.container}>
            <div className={styles.ingredients}
                ref={ref}>
                    <IngredientsConstructor bun={bun} main={main}/>
            </div>
            <InfoOfOrder />
        </nav>
    )
}

export default BurgerConstructor
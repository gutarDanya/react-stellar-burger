import React, { useEffect } from 'react';

import InfoOfOrder from './InfoOfOrder/InfoOfOrder';

import styles from './BurgerConstructor.module.css';
import { useDrag, useDrop } from 'react-dnd';
import { addBun, addMainIngredient } from '../../services/actions/ingredientsConstructorAction';
import { IngredientsConstructor } from './IngredientsConstructor/IngredientsConstructor';
import { addCount } from '../../services/actions/apiAction';
import { useAppDispatch, useAppSelector } from '../../services/hooks/reduxHooks';
import { v4 as uuid4 } from 'uuid';
import { TIngredientObject } from '../../utils/constantsOfTS';

function BurgerConstructor() {

    const dispatch = useAppDispatch();

    const bun = useAppSelector(state => state.constructorReducer.bun);
    const main = useAppSelector(state => state.constructorReducer.main);



    const [, ref] = useDrop({
        accept: 'ingredient',
        drop(item: any ) {
            if (item.ingredient.type === 'bun') {
                dispatch(addBun(item.ingredient, uuid4()))
                dispatch(addCount(item.ingredient))
                console.log(item)
            } else {
                dispatch(addMainIngredient(item.ingredient, uuid4()))
                dispatch(addCount(item.ingredient))
                console.log(item)
            }
        }
    })


    return (
        <nav className={styles.container}>
            <div className={styles.ingredients}
            data-testid='constructor'
                ref={ref}>
                    <IngredientsConstructor bun={bun} main={main}/>
            </div>
            <InfoOfOrder />
        </nav>
    )
}

export default BurgerConstructor;
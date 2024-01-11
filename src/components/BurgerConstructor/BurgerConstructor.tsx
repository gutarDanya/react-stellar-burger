import React, { useEffect } from 'react';

import InfoOfOrder from './InfoOfOrder/InfoOfOrder';

import styles from './BurgerConstructor.module.css';
import { useDrag, useDrop } from 'react-dnd';
import { addBun, addMainIngredient } from '../../services/actions/ingredientsConstructorAction';
import { IngredientsConstructor } from './IngredientsConstructor/IngredientsConstructor';
import { addCount } from '../../services/actions/apiAction';
import { useAppDispatch, useAppSelector } from '../../services/hooks/reduxHooks';
import { v4 as uuid4 } from 'uuid';

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
                console.log(item.ingredient)
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

interface IBun extends IIngredient {
    type: 'bun';
};

interface IMain extends IIngredient {
    type: 'main';
};

interface IReducer {
    bun?: IBun;
    main: Array<IMain>
};

interface IIngredient {
    _id: string;
    name: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    superId: string;
};

export default BurgerConstructor;
import React, { useEffect } from 'react';

import InfoOfOrder from './InfoOfOrder/InfoOfOrder';

import styles from './BurgerConstructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { addBun, addMainIngredient } from '../../services/actions/ingredientsConstructorAction';
import { IngredientsConstructor } from './IngredientsConstructor/IngredientsConstructor';
import { addCount } from '../../services/actions/apiAction';
import { sortingIngredientsGenerator } from '../../services/actions/ingredientsConstructorAction';

function BurgerConstructor() {

    const dispatch = useDispatch();

    const bun = useSelector((state: TSelector) => state.constructorReducer.bun);
    const main = useSelector((state: TSelector) => state.constructorReducer.main);



    const [, ref] = useDrop({
        accept: 'ingredient',
        drop(item: any ) {
            if (item.ingredient.type === 'bun') {
                dispatch(addBun(item.ingredient))
                dispatch(addCount(item.ingredient))
                console.log(item.ingredient)
            } else {
                dispatch(addMainIngredient(item.ingredient))
                dispatch(addCount(item.ingredient))
                console.log(item)
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

type TSelector = {
    constructorReducer: IReducer
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

interface IDropIngredient {
    ingredient: IIngredient;
}

export default BurgerConstructor;
import React from 'react';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Bun.module.css'
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';

export const Bun = ({ ingredient, openPopup }) => {

    const [, ref] = useDrag({
        type: 'ingredient',
        item: {
            ingredient
        }
    })


    return (
        <div className={styles.ingredient}
            onClick={() => openPopup(ingredient)}
            ref={ref}
            key={ingredient._id}>
            {/* {ingredient.name === 'Краторная булка N-200i'
                ? <Counter count={1} size='default' extraClass='m-1' />
                : null} */}
                {ingredient.__v !== 0
                ? <Counter count={ingredient.__v} size='default' extraClass='m-1'/>
                : null}
            <img src={ingredient.image} alt={ingredient.alt} />
            <h4 className={styles.price}>{ingredient.price} <CurrencyIcon /></h4>
            <p className={styles.name}>{ingredient.name}</p>
        </div>
    )
}